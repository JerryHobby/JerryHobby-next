import React from 'react';
import Title from "@/app/components/Title";
import {Card, Flex} from "@radix-ui/themes";
import ShowMarkdown from "@/app/components/ShowMarkdown";
import usePages from "@/app/models/UsePages";
import {Page} from ".prisma/client";

const Experience = async () => {

    const title = "Experience"
    const icon = "experience"
    const pagePrefix = "experience"

    const data = await usePages(pagePrefix);

    function getCard(content?: Page) {
        if (!content) return (<>No data</>);
        return (<ShowMarkdown item={content}/>);
    }

    const cardStyle = 'prose w-full mt-5'

    return (
        <main>
            <Title title={title} icon={icon}/>

            <Flex gap='3' wrap='wrap' width='100%' align='stretch'>

                <Card className={cardStyle}>
                    {getCard(data!['Experience 1'])}
                </Card>

                <Card className={cardStyle}>
                    {getCard(data!['Experience 2'])}
                </Card>

                <Card className={cardStyle}>
                    {getCard(data!['Experience 3'])}
                </Card>
            </Flex>
        </main>
    )
}

export default Experience;