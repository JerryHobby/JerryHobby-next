import React from 'react';
import {Title} from "@/app/components";
import SearchForm from "@/app/airports/searchForm";

const Page = () => {
    const title = "Airports"
    const icon = "airports"
    return (
        <>
        <Title title={title} icon={icon}/>

    <div className='flex justify-between'>
        <h1 className='text-2xl font-bold'>{title}</h1>
        <div className='flex items-center'>
            <SearchForm/>
        </div>
    </div>
</>
    );
};

export default Page;