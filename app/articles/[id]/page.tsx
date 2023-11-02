import React from 'react';
import Title from "@/app/components/Title";
import usePages from "@/app/models/UsePages";
import ShowMarkdown from "@/app/components/ShowMarkdown";
import {Article, Page} from ".prisma/client";
import {Box, Card, Flex, Table, TableBody, TableCell, TableRow} from "@radix-ui/themes";
import useCategories from "@/app/models/UseCategories";
import useArticle from "@/app/models/UseArticle";

interface Props  {
    params: {
        id: string
    }
}

const ArticlePage = async ({params: {id}}: Props) => {

    const data = await useArticle({id});

    if(!data) return (<></>);

    const article = data;
    const category = article.category;

    if(!article) return (<></>);

    const title = "Jerry's Thoughts"
    const icon = "articles"

    const cardStyle = 'prose w-96 mt-5'

    return (
        <main>
            <Title title={title} icon={icon}/>

            <div className='text-lg mb-2 font-bold text-end'>{category.name}</div>

                    <Flex gap='4' direction='column' className='w-full border rounded-box bg-stone-50 p-3'>


                            <ShowMarkdown item={article}/>
                        </Flex>

        </main>
    )
};

export default ArticlePage;