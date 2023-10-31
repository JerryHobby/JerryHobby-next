import React from 'react';
import Title from "@/app/components/Title";
import ContentBox from "@/app/components/ContentBox";
import Image from "next/image";

const Articles = () => {
    return (
        <main>
            <Title title='Articles' icon="articles"></Title>

            <div className="flex">
                <ContentBox className="flex w-1/8 mr-3">
                    <Image src={'/jh2.png'}
                           alt={"Jerry."}
                           width="50"
                           height="90"
                           sizes="50vw"
                           className=" object-scale-down"></Image>

                    <p className={"pl-3"}>The principal reason.The principal reason.The principal reason.The principal
                        reason.The principal reason.The principal reason.The principal reason.The principal reason.The
                        principal reason.The principal reason.The principal reason.</p>
                </ContentBox>

                <p className="w-max">The principal reason you won't find every valid re- word in a dictionary
                    is because re- is a productive prefix, which can easily be used to
                    form words with a predictable meaning -- as long as the meaning is the
                    most obvious "repeat". Thus re-email would mean to send another email.
                </p>
            </div>


        </main>
    );
};

Articles.propTypes = {};

export default Articles;