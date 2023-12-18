'use client';
import {Select} from '@radix-ui/themes';
import React from 'react';
import {useRouter, useSearchParams} from "next/navigation";
import {Category} from ".prisma/client";

interface Props {
    categories: Category[];
}

const CategoryFilter = ({categories}:Props) => {

    const router = useRouter();
    const searchParams = useSearchParams();

    const selectedCategoryId = searchParams.get('categoryId') || '0';

    // const activeCategories = categories.filter((category) => {
    //     return category.articles.length > 0;
    // }

    return (
        <Select.Root
            defaultValue={selectedCategoryId}
            onValueChange={(categoryId) => {
                console.log("category: ", categoryId);
                if (categoryId !== '0') {
                    const params = new URLSearchParams();
                    params.set('categoryId', categoryId);
                    router.push(`/articles?${params.toString()}`);
                } else {
                    router.push(`/articles`);
                }
            }
            }>
            <Select.Trigger>
                <Select.Label>Categories</Select.Label>
            </Select.Trigger>
            <Select.Content>
                <Select.Item key={'All'} value={'0'}>All Categories</Select.Item>
                {categories.map((category) => (
                    <Select.Item
                        key={category.id}
                        value={category.id.toString() || '0'}
                    >
                        {category.name}
                    </Select.Item>
                ))
                }
            </Select.Content>
        </Select.Root>
    );
};

export default CategoryFilter;