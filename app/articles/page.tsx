import React from 'react';
import Title from "@/app/components/Title";
import usePages from "@/app/models/UsePages";
import ShowMarkdown from "@/app/components/ShowMarkdown";
import {Flex, Table, TableBody, TableCell, TableRow, Text} from "@radix-ui/themes";
import useArticles from "@/app/models/UseArticles";
import Link from "next/link";
import Pagination from "@/app/components/Pagination";
import CategoryBadge from "@/app/articles/CategoryBadge";
import CategoryFilter from "@/app/articles/CategoryFilter";
import UseActiveCategories from "@/app/models/UseActiveCategories";

export interface ArticleQuery {
    categoryId: number;
    page?: number;
}

interface Props {
    searchParams: ArticleQuery
}

const Articles = async ({searchParams}: Props) => {
    const title = "Articles"
    const icon = "articles"
    const pagePrefix = "articles"

    const data = await usePages(pagePrefix);
    const allArticles = await useArticles();
    const categories = await UseActiveCategories();

    const pageSize = 5;
    const currentPage = searchParams.page ? parseInt(searchParams.page.toString()) : 1;


    // no sorting. just pagination and filtering

    let articles = allArticles;
    if(searchParams.categoryId !== undefined) {
        articles = allArticles.filter((article) => {
            return article.categoryId === parseInt(searchParams.categoryId.toString()) ;
        })
    }

    const articleCount = articles.length;
    articles = articles.slice(pageSize * (currentPage - 1), pageSize * currentPage);


    return (
        <main>
            <Title title={title} icon={icon}/>

            {(data) && data['Articles 1']
                && <ShowMarkdown item={data['Articles 1']}/>}

            <CategoryFilter categories={categories}/>
            <Table.Root className='w-full border rounded mt-3'>
                <TableBody className='w-full'>
                    <TableRow>

                    <TableCell className='space-y-3'>

                        {articles.map((article) => {
                            return (
                                    <Flex key={article.id} gap='4' direction='column'
                                          className='w-full border rounded bg-stone-50 p-3'>


                                        <Flex direction='row' className='justify-items-stretch items-stretch  mb-2'>
                                            <div className=' font-bold text-xl w-full'>
                                                <Link href={`/articles/${article.id}`}>{article.title}</Link>
                                            </div>
                                            <div className='font-bold mt-1.5 text-md whitespace-nowrap text-right'>
                                                <CategoryBadge
                                                    categoryId={article.category.id.toString()}
                                                    searchParams={searchParams}
                                                    categoryName={article.category.name}/>
                                            </div>
                                        </Flex>
                                        <Flex direction='row'>
                                            {article.summary}
                                        </Flex>
                                    </Flex>
                            )
                        })}
                    </TableCell></TableRow>
                </TableBody>
            </Table.Root>
            <Flex direction='column' gap='2' className='text-center w-full my-5'>
                <Pagination
                    itemCount={articleCount}
                    pageSize={pageSize}
                    currentPage={currentPage}/>
                <Text>{articleCount} Articles Found</Text>
            </Flex>
        </main>
    )
};

export default Articles;
export const dynamic="force-dynamic";
