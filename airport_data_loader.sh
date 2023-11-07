#!/bin/zsh
TARGETDIR=/tmp/airport_data
mkdir -p $TARGETDIR

URL=https://raw.githubusercontent.com/davidmegginson/ourairports-data/main/
FILES=(airports.csv runways.csv navaids.csv airport-frequencies.csv countries.csv regions.csv)
FILES=(Runways.csv Navaids.csv)


for (( i = 1; i <= $#FILES; i++ )) do
    ( # subshell to contain the effect of the chdir
        RAW=$TARGETDIR/in-"${FILES[i]}"
        CSV=$TARGETDIR/"${FILES[i]}"

        echo "#############################################"
        curl $URL"${FILES[i]}" > "$RAW"
        sed 's/,,/,\\N,/g' "$RAW" | sed 's/,,/,\\N,/g' > "$CSV"
        mysqlimport --user=jerryhobby --host='jerryhobby.com' --password='wjb7ETJ*dzr2jeu2wuf' jerryhobby "$CSV" --delete --force --verbose --ignore-lines=1 --fields-terminated-by=',' --fields-enclosed-by='"' --lines-terminated-by='\n'
    )
done


#curl "https://raw.githubusercontent.com/davidmegginson/ourairports-data/main/navaids.csv" > $TARGETDIR/Navaids_raw.csv
#sed 's/,,/,\\N,/g' $TARGETDIR/Navaids_raw.csv | sed 's/,,/,\\N,/g' > $TARGETDIR/Navaids.csv


#mysqlimport --user=jerryhobby --password='wjb7ETJ*dzr2jeu2wuf' jerryhobby $TARGETDIR/Airports.csv --fields-terminated-by=',' --lines-terminated-by='\n' --columns='id,ident,type,name,latitude_deg,longitude_deg,elevation_ft,continent,iso_country,iso_region,municipality,scheduled_service,gps_code,iata_code,local_code,home_link,wikipedia_link,keywords'
#mysqlimport --user=jerryhobby --password='wjb7ETJ*dzr2jeu2wuf' jerryhobby $TARGETDIR/Runways.csv --fields-terminated-by=',' --lines-terminated-by='\n' --columns='id,airport_ref,airport_ident,length_ft,width_ft,surface,lighted,closed,le_ident,le_latitude_deg,le_longitude_deg,le_elevation_ft,le_heading_degT,le_displaced_threshold_ft,he_ident,he_latitude_deg,he_longitude_deg,he_elevation_ft,he_heading_degT,he_displaced_threshold_ft'
#mysqlimport --user=jerryhobby --password='wjb7ETJ*dzr2jeu2wuf' jerryhobby $TARGETDIR/Frequencies.csv --fields-terminated-by=',' --lines-terminated-by='\n' --columns='id,airport_ref,airport_ident,type,description,frequency_mhz'
#mysqlimport --user=jerryhobby --password='wjb7ETJ*dzr2jeu2wuf' jerryhobby $TARGETDIR/Countries.csv --fields-terminated-by=',' --lines-terminated-by='\n' --columns='id,code,name,continent,wikipedia_link,keywords'
#mysqlimport --user=jerryhobby --password='wjb7ETJ*dzr2jeu2wuf' jerryhobby $TARGETDIR/Regions.csv --fields-terminated-by=',' --lines-terminated-by='\n' --columns='id,code,name,local_code,wikipedia_link,keywords'


