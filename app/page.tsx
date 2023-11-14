import Title from "@/app/components/Title";
import React from "react";
import ShowMarkdown from "@/app/components/ShowMarkdown";
import usePages from "@/app/models/UsePages";
import Image from "next/image";
import YoutubeEmbed from "@/app/components/YoutubeEmbed";
import 'app/components/YouTubeEmbed.css'
import FlexibleFrame from "@/app/components/FlexibleFrame";


export default async function Home() {

    const title = "Jerry Hobby"
    const icon = "home"
    const pagePrefix = "home"
    const data = await usePages(pagePrefix);

    return (
        <main className='mt-0'>
            <Title title={title} icon={icon}/>

            {/*<Image className='mb-10 z-9 rounded-box '*/}
            {/*       src='/images/banner-nerd.png'*/}
            {/*       alt='Programmer Banner' height={200} width={1280}/>*/}
            <div className='flex flex-col sm:flex-row gap-5'>

                <FlexibleFrame className='bg-indigo-50 border'>
                {(data) && data['Home 1']
                    && <ShowMarkdown item={data['Home 1']}/>}
                </FlexibleFrame>
                <FlexibleFrame className='min-w-fit '>
                    <Image
                        src="/images/jerry_hobby_headshot.png"
                        alt="Jerry Hobby" width={250} height={150}
                        className=" mb-5 align-top object-contain h-150 w-250 border mx-10 p-3 rounded-box "/>
                    <Image
                        src="/images/skillstack.png"
                        alt="full stack developer" width={250} height={150}
                        className="align-top object-contain h-150 w-250 border mx-10 p-3 rounded-box "/>

                </FlexibleFrame>
            </div>
            <FlexibleFrame>
            {(data) && data['Home 2']
                && <ShowMarkdown item={data['Home 2']}/>}
                </FlexibleFrame>

            <div className="flex justify-center pb-10">
                <YoutubeEmbed embedId="wOZe14BmnTo"/>
            </div>
        </main>
    )
}
export const dynamic="force-dynamic";
