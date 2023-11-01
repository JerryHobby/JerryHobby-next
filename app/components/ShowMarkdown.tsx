'use client';
import React from 'react';
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import {Page} from ".prisma/client";

interface Props {
    item?: Page | null,
    index?: number
}

const ShowMarkdown = ({item = null, index = 0}: Props) => {
    if (!item) return null;
    return (
        <ReactMarkdown className='reactMarkDown' key={index} remarkPlugins={[gfm]}>
            {item.text || 'Loading...'}
        </ReactMarkdown>
    );
};

export default ShowMarkdown;