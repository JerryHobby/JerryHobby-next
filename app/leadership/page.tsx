import React from 'react';
import Title from "@/app/components/Title";
import usePages from "@/app/models/UsePages";
import {Card, Flex} from "@radix-ui/themes";
import ShowMarkdown from "@/app/components/ShowMarkdown";
import {Page} from ".prisma/client";

const Leadership = async () => {

    const title = "Leadership Skills"
    const icon = "leadership"
    const pagePrefix = "leadership"

    const data = await usePages(pagePrefix);

    function getCard(content?: Page) {
        if (!content) return (<>No data</>);
        return (<ShowMarkdown item={content}/>);
    }

    const cardStyle = 'prose w-80 mt-5'
    const cardStyleXL = 'prose w-[35rem] mt-5'


    return (
        <main>
            <Title title={title} icon={icon}/>

            {(data) && data['Leadership 1']
                && <ShowMarkdown item={data['Leadership 1']}/>}


            <Flex gap='3' wrap='wrap' width='100%' align='stretch'>

                <Card className={cardStyle}>
                    {getCard(data!['Leadership 2'])}
                </Card>

                <Card className={cardStyleXL}>
                    {getCard(data!['Leadership 3'])}
                </Card>
            </Flex>
        </main>
    )
};

export default Leadership;
export const dynamic="force-dynamic";
