import React from 'react';
import {ArticleQuery} from "@/app/articles/page";
import NextLink from "next/link";

interface Props {
    categoryId: string;
    categoryName: string;
    searchParams: ArticleQuery;
}
type ButtonProps = {
    [id: string]: string;
}

const buttonProps: ButtonProps  =  {
    '1': 'bg-green-100 hover:bg-green-200 text-green-800',
    '2': 'bg-blue-100 hover:bg-blue-200 text-blue-800',
    '3': 'bg-red-100 hover:bg-red-200 text-red-800',
    '4': 'bg-yellow-100 hover:bg-yellow-200 text-yellow-800',
    '5': 'bg-purple-100 hover:bg-purple-200 text-purple-800',
    '6': 'bg-gray-100 hover:bg-gray-200 text-gray-800',
    '7': 'bg-pink-100 hover:bg-pink-200 text-pink-800',
    '8': 'bg-indigo-100 hover:bg-indigo-200 text-indigo-800',
}

const CategoryBadge = (props: Props) => {

    const {categoryId, categoryName, searchParams} = props;

    return (
        <NextLink
            className={`border rounded px-2 py-1 text-gray-800 hover:text-gray-900 ${buttonProps[categoryId]}`}
            href={
            {
                query: {
                    ...searchParams,
                    categoryId: categoryId,
                    page: 1
                }
            }
        }>
            {categoryName}
        </NextLink>
    );
};

export default CategoryBadge;