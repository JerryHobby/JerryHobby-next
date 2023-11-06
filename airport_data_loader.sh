#!/bin/zsh
TARGETDIR=/tmp/airport_data/

mkdir -p $TARGETDIR

curl "https://raw.githubusercontent.com/davidmegginson/ourairports-data/main/airports.csv" > $TARGETDIR/airports.csv
curl "https://raw.githubusercontent.com/davidmegginson/ourairports-data/main/runways.csv" > $TARGETDIR/runways.csv
curl "https://raw.githubusercontent.com/davidmegginson/ourairports-data/main/navaids.csv" > $TARGETDIR/navaids.csv
curl "https://raw.githubusercontent.com/davidmegginson/ourairports-data/main/frequencies.csv" > $TARGETDIR/frequencies.csv
curl "https://raw.githubusercontent.com/davidmegginson/ourairports-data/main/countries.csv" > $TARGETDIR/countries.csv
curl "https://raw.githubusercontent.com/davidmegginson/ourairports-data/main/regions.csv" > $TARGETDIR/regions.csv
curl 'https://raw.githubusercontent.com/davidmegginson/ourairports-data/main/airport-comments.csv' > $TARGETDIR/airport-comments.csv

ls /tmp/airport_data


#mysqlimport

