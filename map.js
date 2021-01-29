var map;
    function initMap() 
    {
        // initial zoom value depending if the device is mobile or desktop.
        let koko;
	    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	    koko = 4;
	    }
	    else
	    {
	    koko = 5
        }
        
        // Setting up the variables that the map will use.
        map = new google.maps.Map(document.getElementById('kartta'), 
        {
            center: {lat: 65.253123, lng: 26.058750},
            zoom: koko,
            styles: kartta_tyyli,
            disableDefaultUI: true,
            zoomControl: true,
            fullscreenControl: true,
            draggable: true,
            disableDoubleClickZoom: false,
            scrollwheel: true,
            minZoom: 4, 
            maxZoom: 17
        });

        // Defining the region polynoms, that will be drawn on the map later.
        let maakunnat = 
        [
            ahvenanmaapol, etela_karjalapol, etela_pohjanmaapol, etela_savopol,
            kainuupol, kanta_hamepol, keski_pohjanmaapol, keskisuomipol,
            kymmenlaaksopol, lappipol, pirkanmaapol, pohjanmaapol, pohjoiskarjalpol,
            pohjoispohjanmaapol, pohjoissavopol, paijjathamepol, satakuntapol,
            uusimaapol, varsinaissuomipol
        ];

        // Infection labels and where to place them.
        let tartuntalabel = [
            {lat: 60.087050, lng: 20.186010}, { lat: 61.162862, lng:  28.199996},
            { lat: 62.877077, lng: 23.163034 }, { lat: 61.875443, lng: 27.602441 },
            { lat: 64.500737, lng: 28.603494 }, { lat: 60.879146, lng: 24.359879 },
            { lat: 63.532713, lng: 24.158996 }, {lat: 62.544636, lng: 25.380401 },
            { lat: 60.683811, lng: 27.03288 }, { lat: 67.094677, lng: 26.608307 },
            { lat: 61.653754, lng: 23.659103 }, { lat: 63.101035, lng: 21.77737 },
            { lat: 62.840768, lng: 30.103348 }, { lat: 64.787989, lng: 25.471109 },
            { lat: 63.206545, lng: 27.331087 }, { lat: 61.167226, lng: 25.655213 },
            { lat: 61.525957, lng: 21.783795 }, { lat: 60.274529, lng: 24.82737 },
            { lat: 60.378945, lng: 22.240316 }
            ];

        // Infection counts, valued ordered same as "maakunnat" above.
        let tartuntoja = [  0, 5, 0, 5, 0, 10, 0, 5, 0, 00, 22,
                            2, 1, 25, 3, 1, 9, 128, 15];

        let asteet= [ "#32cd32",  "#ffcc33", "#ff0000" ]

        // Function to draw the region on the map, decide the severity level (by three levels),
        // color the region either green (no infections), orange (some infections) or red (much infections).
        function lisaaAlue(alue)
        {
            let vakavuus;

            if (tartuntoja[i] == 0) 
            {
                vakavuus = asteet[0];
            }
            else if (tartuntoja[i] < 10)
            {
                vakavuus = asteet[1];
            }
            else
            {
                vakavuus = asteet[2];
            }

            var maakunta = new google.maps.Polygon({
            paths: alue,
            strokeColor: vakavuus,
            strokeOpacity: 0.4,
            strokeWeight: 3,
            fillColor: vakavuus,
            fillOpacity: 0.35
            })

            maakunta.setMap(map);

        }

        // Loop through the maakunnat array and do the above function to each of them. Also ads
        // marker for how many infections the region has.
        var i;
        for (i = 0; i < maakunnat.length; i++) 
        {
            lisaaAlue(maakunnat[i])

            var icon = {
                url: "", 
                scaledSize: new google.maps.Size(5, 5),
                origin: new google.maps.Point(3,3),
                anchor: new google.maps.Point(3, 3) 
            };

            marker = new google.maps.Marker({
                position: tartuntalabel[i],
                map: map,
                icon: icon,
                label: {
                    color: '#323232',
                    fontWeight: 'bold',
                    fontSize: "30px",
                    textAlign: "center",
                    verticalAlign: "center",
                    Type:  "circle",
                    text: tartuntoja[i].toString()
                }
                });
        }
        
    }
    
