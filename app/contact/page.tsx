import React from 'react';
import Title from "@/app/components/Title";
import usePages from "@/app/models/UsePages";
import ShowMarkdown from "@/app/components/ShowMarkdown";
import {Page} from ".prisma/client";
import FlexibleFrame from "@/app/components/FlexibleFrame";

const Contact = async () => {

    const title = "Contact Jerry"
    const icon = "contact"
    const pagePrefix = "contact"

    const data = await usePages(pagePrefix);

    function getCard(content?: Page) {
        if (!content?.text) return (<>No data</>);
        return ( <ShowMarkdown item={content}/>);
    }

    return (
        <main>
            <Title title={title} icon={icon}/>
            <div className='flex flex-col sm:flex-row gap-5 justify-center'>

                <FlexibleFrame className='border w-400 shadow bg-gray-50 '>
                {data && getCard(data['Contact 1'])}
                </FlexibleFrame>
            </div>
        </main>
    )
};

export default Contact;
export const dynamic="force-dynamic";
