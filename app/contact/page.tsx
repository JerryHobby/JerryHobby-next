import React from 'react';
import Title from "@/app/components/Title";
import usePages from "@/app/models/UsePages";
import {Card, Flex} from "@radix-ui/themes";
import ShowMarkdown from "@/app/components/ShowMarkdown";
import {Page} from ".prisma/client";

const Contact = async () => {

    const title = "Contact Jerry"
    const icon = "contact"
    const pagePrefix = "contact"

    const data = await usePages(pagePrefix);

    function getCard(content?: Page) {
        if(!content) return (<>No data</>);
        return(<ShowMarkdown item={content}/>);
    }

    const cardStyle = 'prose w-96 mt-5'

    return (
        <main>
            <Title title={title} icon={icon}/>

            {(data) && data['Contact 1']
                && <ShowMarkdown item={data['Contact 1']}/>}

        </main>
    )
};

export default Contact;