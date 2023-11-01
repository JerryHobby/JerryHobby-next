import React from 'react';
import Title from "@/app/components/Title";
import usePages from "@/app/models/UsePages";
import ShowMarkdown from "@/app/components/ShowMarkdown";
import useProjects from "@/app/models/UseProjects";
import {Box, Flex, Heading} from "@radix-ui/themes";
import {Project} from ".prisma/client";
import Image from "next/image";
import Link from "next/link";

const Projects = async () => {

    const title = "Projects"
    const icon = "projects"
    const pagePrefix = "projects"

    const data = await usePages(pagePrefix);
    const projects = await useProjects();

    function getCard(project?: Project) {
        if (!project) return (<>No data</>);
        return (
            <div>
                <Link href={`${project.url}`}>
                    <Heading size='6' className='pb-5' align='center'>{project.title}</Heading>
                    <Flex align='start' gap='1'>
                        <Image src={project.thumbnailUrl}
                               alt={'App Thumbnail'}
                               width={100}
                               height={100}
                               className={'mt-2 rounded-lg object-contain w-200'}
                        />
                        <Box className='px-4'>{project.text}</Box>
                    </Flex>
                </Link>
            </div>
        );

    }

    const cardStyle = 'p-4 border shadow-md rounded-box prose w-96 mt-5'

    return (
        <main>
            <Title title={title} icon={icon}/>

            {(data) && data['Projects 1']
                && <ShowMarkdown item={data['Projects 1']}/>}

            <Flex className=" gap-4 flex-wrap">
                {projects && Object.values(projects).map((item) => (
                    <div key={item.id} className={cardStyle}>
                        {getCard(item)}
                    </div>
                ))}
            </Flex>
        </main>
    )
};

export default Projects;