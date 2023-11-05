import React from 'react';
import {Airports} from ".prisma/client";
import prisma from "@/prisma/client";
import {Table} from "@radix-ui/themes";
import {Title} from "@/app/components";
import SearchForm from "@/app/airports/searchForm";

interface Props {
    params: {
        search: string
    }
}

const Page = async ({params: {search}}: Props) => {
    const title = "Airports"
    const icon = "airports"

    const airports = await prisma.airports.findMany({
        where: {
            type: {
                not: 'small_airport' || 'closed' || 'heliport' || 'seaplane_base' || 'balloonport'
            },
            AND: {
                OR: [
                    {name: {contains: search}},
                    {municipality: {contains: search}},
                    {iata_code: {contains: search}},
                    {local_code: {contains: search}},
                    {ident: {contains: search}},
                    {keywords: {contains: search}},
                ]
            }
        },
        orderBy: {
            name: 'asc'
        },
        take: 100
    });

    return (
        <>
            <Title title={title} icon={icon}/>

            <div className='flex justify-between'>
                <h1 className='text-2xl font-bold'>{title}</h1>
                <div className='flex items-center'>
                    <SearchForm/>
                </div>
            </div>

            <Table.Root className='w-full border rounded mt-3 mb-10'>
                <Table.Header className='bg-gray-100'>
                    <Table.Row>
                        <Table.Cell className='font-bold'>Name</Table.Cell>
                        <Table.Cell className='font-bold'>Municipality</Table.Cell>
                        <Table.Cell className='font-bold'>IATA Code</Table.Cell>
                        <Table.Cell className='font-bold'>Local Code</Table.Cell>
                        <Table.Cell className='font-bold'>Ident</Table.Cell>
                        <Table.Cell className='font-bold'>Keywords</Table.Cell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {airports.map((airport: Airports) => (
                        <Table.Row key={airport.id}>
                            <Table.Cell>{airport.name}</Table.Cell>
                            <Table.Cell>{airport.municipality}</Table.Cell>
                            <Table.Cell>{airport.iata_code}</Table.Cell>
                            <Table.Cell>{airport.local_code}</Table.Cell>
                            <Table.Cell>{airport.ident}</Table.Cell>
                            <Table.Cell>{airport.keywords}</Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table.Root>
        </>
    );
};

export default Page;