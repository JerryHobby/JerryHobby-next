import React from 'react';
import Title from "@/app/components/Title";
import usePages from "@/app/models/UsePages";
import ShowMarkdown from "@/app/components/ShowMarkdown";
import {Article, Page} from ".prisma/client";
import {Box, Card, Flex, Table, TableBody, TableCell, TableRow} from "@radix-ui/themes";
import useCategories from "@/app/models/UseCategories";
import useArticles from "@/app/models/UseArticles";
import Link from "next/link";

const Articles = async () => {
    const title = "Articles"
    const icon = "articles"
    const pagePrefix = "articles"

    const data = await usePages(pagePrefix);
    const categories = await useCategories();
    const articles = await useArticles();

    function getCard(content?: Page) {
        if (!content) return (<>No data</>);
        return (<ShowMarkdown item={content}/>);
    }

    const cardStyle = 'prose w-96 mt-5'

    function categoryMenu() {
        return <Flex direction='column' gap='2' className='text-center w-full my-5'>
            <Card className='w-2/12'>
                <ol>
                    {categories.map((category) => {
                        return (
                            <li key={category.id}>
                                <a href={`#${category.name}`}>{category.name}</a>
                            </li>
                        )
                    })}
                </ol>
            </Card>
        </Flex>;
    }



    return (
        <main>
            <Title title={title} icon={icon}/>

            {(data) && data['Articles 1']
                && <ShowMarkdown item={data['Articles 1']}/>}


            <Table.Root className='w-full border rounded mt-10'>
                <TableBody className='w-full'>
                    <TableCell className='space-y-3'>

            {articles.map((article) => {
                return (
                    <Flex key={article.id} gap='4' direction='column' className='w-full border rounded bg-stone-50 p-3'>
                        <Flex direction='row' className='lg:rt-r-jc-space-between mb-2'>
                            <span className='font-bold text-xl'>
                                <Link href={`/articles/${article.id}`}>{article.title}</Link>
                            </span>
                            <span className='font-bold'>{article.category.name}</span>
                        </Flex>
                        <Flex direction='row'>
                            {article.summary}
                        </Flex>
                    </Flex>
                )

            })}
                    </TableCell>
            </TableBody>
            </Table.Root>
        </main>
    )
};

export default Articles;