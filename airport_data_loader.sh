#!/bin/zsh
TARGETDIR=/tmp/airport_data/

mkdir -p $TARGETDIR

curl "https://raw.githubusercontent.com/davidmegginson/ourairports-data/main/airports.csv" > $TARGETDIR/Airports.csv
curl "https://raw.githubusercontent.com/davidmegginson/ourairports-data/main/runways.csv" > $TARGETDIR/Runways.csv
curl "https://raw.githubusercontent.com/davidmegginson/ourairports-data/main/navaids.csv" > $TARGETDIR/Navaids.csv
curl "https://raw.githubusercontent.com/davidmegginson/ourairports-data/main/airport-frequencies.csv" > $TARGETDIR/Frequencies.csv
curl "https://raw.githubusercontent.com/davidmegginson/ourairports-data/main/countries.csv" > $TARGETDIR/Countries.csv
curl "https://raw.githubusercontent.com/davidmegginson/ourairports-data/main/regions.csv" > $TARGETDIR/Regions.csv

ls -l /tmp/airport_data

#mysqlimport --user=jerryhobby --password='wjb7ETJ*dzr2jeu2wuf' jerryhobby $TARGETDIR/Airports.csv --fields-terminated-by=',' --lines-terminated-by='\n' --columns='id,ident,type,name,latitude_deg,longitude_deg,elevation_ft,continent,iso_country,iso_region,municipality,scheduled_service,gps_code,iata_code,local_code,home_link,wikipedia_link,keywords'
#mysqlimport --user=jerryhobby --password='wjb7ETJ*dzr2jeu2wuf' jerryhobby $TARGETDIR/Runways.csv --fields-terminated-by=',' --lines-terminated-by='\n' --columns='id,airport_ref,airport_ident,length_ft,width_ft,surface,lighted,closed,le_ident,le_latitude_deg,le_longitude_deg,le_elevation_ft,le_heading_degT,le_displaced_threshold_ft,he_ident,he_latitude_deg,he_longitude_deg,he_elevation_ft,he_heading_degT,he_displaced_threshold_ft'
mysqlimport --user=jerryhobby --password='wjb7ETJ*dzr2jeu2wuf' jerryhobby $TARGETDIR/Navaids.csv --fields-terminated-by=',' --lines-terminated-by='\n' --columns='id,filename,ident,name,type,frequency_khz,latitude_deg,longitude_deg,elevation_ft,iso_country,dme_frequency_khz,dme_channel,slaved_variation,usage,associated_airport,associated_airport_ident'
#mysqlimport --user=jerryhobby --password='wjb7ETJ*dzr2jeu2wuf' jerryhobby $TARGETDIR/Frequencies.csv --fields-terminated-by=',' --lines-terminated-by='\n' --columns='id,airport_ref,airport_ident,type,description,frequency_mhz'
#mysqlimport --user=jerryhobby --password='wjb7ETJ*dzr2jeu2wuf' jerryhobby $TARGETDIR/Countries.csv --fields-terminated-by=',' --lines-terminated-by='\n' --columns='id,code,name,continent,wikipedia_link,keywords'
#mysqlimport --user=jerryhobby --password='wjb7ETJ*dzr2jeu2wuf' jerryhobby $TARGETDIR/Regions.csv --fields-terminated-by=',' --lines-terminated-by='\n' --columns='id,code,name,local_code,wikipedia_link,keywords'


