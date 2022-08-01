window.addEventListener("load",()=>{
    let long;
    let lat;
    let apiid;

    let tempareturedegree = document.querySelector(".tempareture-degree");
    let timezone = document.querySelector(".location-timezome");
    let tempdes=document.querySelector(".tempareture-des");
    let countr =document.querySelector(".country-name");
    let wicon=document.querySelector(".weather-icon");

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position=>{
            long=position.coords.longitude;
            lat=position.coords.latitude;
            apiid="e038080713e905bc398281ccaedf9320";
            
            console.log(long);
            console.log(lat);
            const api=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiid}&units=imperial`;

            fetch(api)
            .then(response=>{
                return response.json();

            })
            .then(data=>{
                console.log(data);
                const{temp}=data.main;
                const name  = data.name;
                const {description,icon} = data.weather[0];
                const {country}=data.sys;
                console.log(icon);
                tempareturedegree.textContent=temp;
                timezone.textContent=name+",";
                tempdes.textContent=description;
                countr.textContent=country;
                var iconurl = "http://openweathermap.org/img/w/" + icon+ ".png";
                wicon.setAttribute("src",iconurl);
                
            })
        })
    }
})