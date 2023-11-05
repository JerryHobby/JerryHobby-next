'use client';
import React, {useEffect, useState} from 'react';
import {Button, Callout, Select, TextField} from '@radix-ui/themes';
import {ErrorMessage, Spinner} from "@/app/components";
import {useRouter} from "next/navigation";
import {Controller, useForm} from "react-hook-form";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import SimpleMDE from "react-simplemde-editor";
import {newArticleSchema} from "@/app/models/validationSchemas";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {Article, Category} from ".prisma/client";
import "./form.css"
import {Session} from "next-auth";

interface Props {
    article?: Article
    categories: Category[]
}


const ArticleForm = ({article, categories}: Props) => {

    const [error, setError] = useState<string>('');
    const [isSubmitting, setSubmitting] = useState<boolean>(false);

    // useEffect(() => {
    //     setPageURL(window.location.href);
    //     if (navigator.share) {
    //         setNativeShare(true);
    //     }
    // }, []);



    const router = useRouter();

    type ArticleFormData = z.infer<typeof newArticleSchema>;

    const {register, control, handleSubmit, formState: {errors}} = useForm<ArticleFormData>(
        {
            resolver: zodResolver(newArticleSchema)
        }
    );

    const onSubmit = handleSubmit(async (data: ArticleFormData) => {
        try {
            setSubmitting(true);
            if (article) {
                await axios.patch(`/api/articles/${article.id}`, data);
                router.push(`/article/${article.id}`)
            } else {
                await axios.post('/api/articles', data);
                router.push('/articles')
            }
            router.refresh()
        } catch (e) {
            setSubmitting(false);
            setError(`Something went wrong: ${e}`);
        }
    });

    return (
        <div className={"max-w-lg"}>
            {error && <Callout.Root className='mb-5 border border-red-500'>
                <Callout.Text>{error}</Callout.Text>
            </Callout.Root>
            }

            <form className={" text-left border p-5 bg-blue-50 space-y-2"}
                  onSubmit={onSubmit}

                  onReset={() => {
                      router.push('/articles')
                  }
                  }
            >
                <TextField.Root>
                    <TextField.Input
                        defaultValue={article?.title}
                        placeholder={"Title"}
                        {...register('title')}/>
                </TextField.Root>
                <ErrorMessage>{errors.title?.message}</ErrorMessage>

                <Select.Root defaultValue=""  {...register('categoryId')} >
                    <Select.Trigger className='bg-white' placeholder="Select a category">
                        <Select.Label>categoryId</Select.Label>
                    </Select.Trigger>
                    <Select.Content>

                        {categories.map((category: Category) => (
                            <Select.Item key={category.id} value={category.id.toString() || ''}>
                                {category.name}
                            </Select.Item>
                        ))}
                    </Select.Content>
                </Select.Root>
                <ErrorMessage>{errors.categoryId?.message}</ErrorMessage>


                <Controller
                    name="summary"
                    control={control}
                    defaultValue={article?.summary}
                    render={
                        ({field}) => <SimpleMDE
                            {...field} placeholder={"Article Summary"}/>
                    }
                />
                <ErrorMessage>{errors.summary?.message}</ErrorMessage>

                <Controller
                    name="text"
                    control={control}
                    defaultValue={article?.text}
                    render={
                        ({field}) => <SimpleMDE{...field} placeholder={"Article Body"}/>
                    }
                />
                <ErrorMessage>{errors.text?.message}</ErrorMessage>

                <div className="text-right space-x-3">
                    <Button type="reset" className='btn btn-primary bg-blue-600'>Cancel</Button>

                    <Button className='btn btn-primary bg-blue-600'
                            disabled={isSubmitting}
                            type="submit">{article ? 'Save Changes' : 'Create Article'}{isSubmitting &&
                        <Spinner/>}
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default ArticleForm;