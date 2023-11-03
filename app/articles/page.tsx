import React from 'react';
import Title from "@/app/components/Title";
import usePages from "@/app/models/UsePages";
import ShowMarkdown from "@/app/components/ShowMarkdown";
import {Flex, Table, TableBody, TableCell, TableRow} from "@radix-ui/themes";
import useArticles from "@/app/models/UseArticles";
import Link from "next/link";

const Articles = async () => {
    const title = "Articles"
    const icon = "articles"
    const pagePrefix = "articles"

    const data = await usePages(pagePrefix);
    const articles = await useArticles();

    return (
        <main>
            <Title title={title} icon={icon}/>

            {(data) && data['Articles 1']
                && <ShowMarkdown item={data['Articles 1']}/>}

            <Table.Root className='w-full border rounded mt-10'>
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
                                                {article.category.name}
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
        </main>
    )
};

export default Articles;