import React from 'react';
import Title from "@/app/components/Title";
import usePages from "@/app/models/UsePages";
import {Card, Flex} from "@radix-ui/themes";
import ShowMarkdown from "@/app/components/ShowMarkdown";
import {Page} from ".prisma/client";


const Technical = async () => {
    const title = "Technical Skills"
    const icon = "technical"
    const pagePrefix = "technical"

    const data = await usePages(pagePrefix);

    function getCard(content?: Page) {
        if (!content) return (<>No data</>);
        return (<ShowMarkdown item={content}/>);
    }

    const cardStyle = 'prose w-64 mt-5'
    const cardStyleXL = 'prose w-[35rem] mt-5'

    return (
        <main>
            <Title title={title} icon={icon}/>

            {(data) && data['Technical 1']
                && <ShowMarkdown item={data['Technical 1']}/>}


            <Flex gap='3' wrap='wrap' width='100%' align='stretch'>

                <Card className={cardStyle}>
                    {getCard(data!['Technical 2'])}
                </Card>

                <Card className={cardStyle}>
                    {getCard(data!['Technical 3'])}
                </Card>
                <Card className={cardStyleXL}>
                    {getCard(data!['Technical 4'])}
                </Card>
            </Flex>


        </main>
    )
};

export default Technical;