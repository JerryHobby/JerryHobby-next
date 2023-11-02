import React from 'react';
import Title from "@/app/components/Title";
import usePages from "@/app/models/UsePages";
import ShowMarkdown from "@/app/components/ShowMarkdown";
import {Page} from ".prisma/client";
import {Card, Flex} from "@radix-ui/themes";
import useCategories from "@/app/models/UseCategories";

const Articles = async () => {
    const title = "Articles"
    const icon = "articles"
    const pagePrefix = "articles"

    const data = await usePages(pagePrefix);
    const categories = await useCategories();

    function getCard(content?: Page) {
        if (!content) return (<>No data</>);
        return (<ShowMarkdown item={content}/>);
    }

    const cardStyle = 'prose w-96 mt-5'

    return (
        <main>
            <Title title={title} icon={icon}/>

            {(data) && data['Articles 1']
                && <ShowMarkdown item={data['Articles 1']}/>}


            <Flex direction='column' gap='2' className='text-center w-full my-5'>
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
            </Flex>


        </main>
    )
};

export default Articles;