'use client';
import React from 'react';
import {usePapaParse} from 'react-papaparse';
import {Airports} from ".prisma/client";
import {Title} from "@/app/components";
import axios from "axios";
import {parse} from "papaparse";

const title = "Airports"
const icon = "airports"

const airportFile = "https://raw.githubusercontent.com/davidmegginson/ourairports-data/main/airports.csv"
const runwayFile = "https://raw.githubusercontent.com/davidmegginson/ourairports-data/main/runways.csv"
const navaidFile = "https://raw.githubusercontent.com/davidmegginson/ourairports-data/main/navaids.csv"
const frequencyFile = "https://raw.githubusercontent.com/davidmegginson/ourairports-data/main/frequencies.csv"
const countryFile = "https://raw.githubusercontent.com/davidmegginson/ourairports-data/main/countries.csv"
const regionFile = "https://raw.githubusercontent.com/davidmegginson/ourairports-data/main/regions.csv"
const airportCommentsFile = 'https://raw.githubusercontent.com/davidmegginson/ourairports-data/main/airport-comments.csv'

export default async function ReadRemoteFile() {
    const {readRemoteFile} = usePapaParse();

    const handleReadRemoteFile = async (url: string) => {
        const csvData = await axios.get(url).then(response => response.data);

        let data: unknown[][] = [];
        parse(csvData.data, {
            header: true,
            complete: (results) => {
                console.log('---------------------------');
                console.log('Results:', results);
                console.log('---------------------------');
                data.push(results.data)
            }
        });
        return data;

    };

    const airports = await handleReadRemoteFile(airportFile)

    return (
        <>
            {airports && airports.map((airport) => () => {
                airport.map((one) => {
                    return (
                        <div>
                            <p>{one as string}</p>
                        </div>
                    )
                })
            })})
        </>);
}