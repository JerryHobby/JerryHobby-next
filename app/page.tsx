import Title from "@/app/components/Title";
import React from "react";
import ShowMarkdown from "@/app/components/ShowMarkdown";
import usePages from "@/app/models/UsePages";
import {Page} from ".prisma/client";

export default async function Home() {

    const title = "Jerry Hobby"
    const icon = "home"
    const pagePrefix = "home"
    const data = await usePages(pagePrefix);
    const cardStyle = 'prose w-96 mt-5'

    function getCard(content?: Page) {
        if (!content) return (<>No data</>);
        return (<ShowMarkdown item={content}/>);
    }

    return (
        <main>
            <Title title={title} icon={icon}/>

            {(data) && data['Home 1']
                && <ShowMarkdown item={data['Home 1']}/>}
        </main>
    )
}
