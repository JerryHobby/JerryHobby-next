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

    const find = decodeURIComponent(search);
    const airports = await prisma.airports.findMany({
        where: {
            type: {
                not: 'small_airport' || 'closed' || 'heliport' || 'seaplane_base' || 'balloonport'
            },
            AND: {
                OR: [
                    {name: {contains: find}},
                    {municipality: {contains: find}},
                    {iata_code: {contains: find}},
                    {local_code: {contains: find}},
                    {iso_country: {contains: find}},
                    {ident: {contains: find}},
                    {keywords: {contains: find}},
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
                        <Table.Cell className='font-bold'>IATA Code</Table.Cell>
                        <Table.Cell className='font-bold'>Name</Table.Cell>
                        <Table.Cell className='font-bold'>Municipality</Table.Cell>
                        <Table.Cell className='font-bold'>Country</Table.Cell>
                        <Table.Cell className='font-bold'>Website</Table.Cell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {airports.map((airport: Airports) => (
                        <Table.Row key={airport.id}>
                            <Table.Cell>{airport.iata_code}</Table.Cell>
                            <Table.Cell>{airport.name}</Table.Cell>
                            <Table.Cell>{airport.municipality}</Table.Cell>
                            <Table.Cell>{airport.iso_country}</Table.Cell>
                            <Table.Cell>
                                {airport.wikipedia_link
                                    && <a className='underline' href={airport.wikipedia_link} target='_blank' rel='noreferrer'>Website</a>}

                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table.Root>
        </>
    );
};

export default Page;