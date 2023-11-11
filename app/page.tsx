import Title from "@/app/components/Title";
import React from "react";
import ShowMarkdown from "@/app/components/ShowMarkdown";
import usePages from "@/app/models/UsePages";
import {Flex} from "@radix-ui/themes";
import Image from "next/image";
import YoutubeEmbed from "@/app/components/YoutubeEmbed";
import 'app/components/YouTubeEmbed.css'


export default async function Home() {

    const title = "Jerry Hobby"
    const icon = "home"
    const pagePrefix = "home"
    const data = await usePages(pagePrefix);

    return (
        <main className='mt-0'>
            <Title title={title} icon={icon}/>
            {/*<Image className='mb-10 z-9 rounded-box '*/}
            {/*       src='/images/artificial-intelligence-3706562_1280.jpg'*/}
            {/*       alt='Artificial Intelligence'height={200} width={1280}/>*/}
            <Flex align='start'>
                {(data) && data['Home 1']
                    && <ShowMarkdown item={data['Home 1']}/>}
                <Image
                    src="/images/jerry_hobby_headshot.png"
                    alt="Jerry Hobby" width={200} height={20}
                    className="align-top object-contain h-50 w-200 border mx-16 p-3 rounded-box "/>
            </Flex>
            {(data) && data['Home 2']
                && <ShowMarkdown item={data['Home 2']}/>}
            <YoutubeEmbed embedId='wOZe14BmnTo'  />
        </main>
    )
}
export const dynamic="force-dynamic";
