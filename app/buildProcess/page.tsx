import React from 'react';
import Title from "@/app/components/Title";
import usePages from "@/app/models/UsePages";
import {Card, Flex} from "@radix-ui/themes";
import ShowMarkdown from "@/app/components/ShowMarkdown";
import {Page} from ".prisma/client";
import '@/app/reactMarkdownTables.css'

const BuildProcess = async () => {

    const title = "Build Process"
    const icon = "buildProcess"
    const pagePrefix = "build process"

    const data = await usePages(pagePrefix);

    function getCard(content?: Page) {
        if (!content) return (<>No data</>);
        return (
            <div className='mdtable'>
                <ShowMarkdown item={content}/>
            </div>
        );
    }

    const cardStyle = 'prose max-w-3xl mt-5'

    return (
        <main>
            <Title title={title} icon={icon}/>

            {(data) && data['Build Process 1']
                && <ShowMarkdown item={data['Build Process 1']}/>}


            <Flex gap='3' wrap='wrap' width='100%' align='stretch'>

                <Card className={cardStyle + ' max-w-2xl'}>
                    {getCard(data!['Build Process 6'])}
                </Card>

                <Card className={cardStyle + ' max-w-2xl'}>
                    {getCard(data!['Build Process 5'])}
                </Card>


            </Flex>
            <Card className={cardStyle}>
                {getCard(data!['Build Process 2'])}
            </Card>

            <Card className={cardStyle}>
                {getCard(data!['Build Process 3'])}
            </Card>

            <Card className={cardStyle}>
                {getCard(data!['Build Process 4'])}
            </Card>
        </main>
    )
};

export default BuildProcess;
export const dynamic="force-dynamic";
