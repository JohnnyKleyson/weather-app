window.addEventListener("load", () =>{
    let long;
    let lat;
    let temperatureDescription = document.querySelector(".weatherCondition");
    let temperatureDegree = document.querySelector(".temperature");
    let location = document.querySelector(".place");
    let icon = document.querySelector(".weatherIcon")

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position =>{
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const api = `http://api.weatherapi.com/v1/current.json?key=64d1f390b8e44fb0aaf01311201311&q=${lat},${long}`;

            fetch(api)
            .then(response => {
                return response.json();
            })
            .then(data =>{
                const temperature = data.current.temp_c
                const summary = data.current.condition.text

                //Set DOM Elements from the API//
                icon.textContent =summary
                temperatureDegree.textContent = temperature + "°";
                temperatureDescription.textContent = data.location.name;
                location.textContent = data.location.region;
                
                
            })
        })
    }
  
})