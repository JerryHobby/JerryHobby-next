import React from 'react';
import Title from "@/app/components/Title";
import usePages from "@/app/models/UsePages";
import {Card, Flex} from "@radix-ui/themes";
import ShowMarkdown from "@/app/components/ShowMarkdown";
import {Page} from ".prisma/client";
import Certificates from "@/app/components/Certificates";

const Resume = async () => {
    const title = "Download Resumes"
    const icon = "resume"
    const pagePrefix = "resume"

    const data = await usePages(pagePrefix);

    function getCard(content?: Page) {
        if(!content) return (<>No data</>);
        return(<ShowMarkdown item={content}/>);
    }

    const cardStyle = 'prose w-96 mt-5'

    return (
        <main>
            <Title title={title} icon={icon}/>

            <div className="prose w-4/12 border rounded-box p-5">
            <Certificates />
            </div>

            {(data) && data['Resumes 1']
                && <ShowMarkdown item={data['Resumes 1']}/>}


            <Flex gap='3' wrap='wrap' width='100%' align='stretch' >

                <Card className={cardStyle}>
                    {getCard(data!['Resumes 2'])}
                </Card>

                <Card className={cardStyle}>
                    {getCard(data!['Resumes 3'])}
                </Card>

                <Card className={cardStyle}>
                    {getCard(data!['Resumes 4'])}
                </Card>
            </Flex>
        </main>
    )
};

export default Resume;