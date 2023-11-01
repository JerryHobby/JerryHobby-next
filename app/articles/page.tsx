import React from 'react';
import Title from "@/app/components/Title";
import usePages from "@/app/models/UsePages";
import {Card, Flex} from "@radix-ui/themes";
import ShowMarkdown from "@/app/components/ShowMarkdown";
import {Page} from ".prisma/client";

const Articles = async () => {
    const title = "Articles"
    const icon = "articles"
    const pagePrefix = "articles"

    const data = await usePages(pagePrefix);

    function getCard(content?: Page) {
        if(!content) return (<>No data</>);
        return(<ShowMarkdown item={content}/>);
    }

    const cardStyle = 'prose w-96 mt-5'

    return (
        <main>
            <Title title={title} icon={icon}/>

            {(data) && data['Articles 1']
                && <ShowMarkdown item={data['Articles 1']}/>}

        </main>
    )
};

export default Articles;