const buttonConfirm = document.getElementById('pressButtton');


buttonConfirm.addEventListener('click', function(){
    let mesto = document.getElementById("cityName").value;
    let country = document.getElementById("shortcutState").value;
    console.log(mesto + " " + country);
    const Key = '290526a576cd425b8f30356b3d538ba5';
    //let link = 'https://api.opencagedata.com/geocode/v1/json?q='+mesto+'%2C%20'+skratka+'&key'+'290526a576cd425b8f30356b3d538ba5=&pretty=1'+this.geokey;
    let link = 'https://api.opencagedata.com/geocode/v1/json?q='+mesto+'%2C%20'+country+'&key='+Key
    fetch(link)
    .then( resp => {
        if( !resp.ok ){
            return (resp.statusText + " " + resp.status)
        } else {                
            return resp.json()                
        }  
     })

    .then(json => {
        
       const lng = json.results[0].geometry.lng
       const lat = json.results[0].geometry.lat
       const countryAbb = json.results[0].components
     })
    
    .catch(error => {
        console.log(error)
     });

});

function zistiPocasie(zemSuradnica1, zemSuradnica2){

    const apiKey = '290526a576cd425b8f30356b3d538ba5';
    
    console.log(zemSuradnica1 + " " + zemSuradnica2)
    fetch('https://api.openweathermap.org/data/2.5/onecall?lat='+zemSuradnica1+'&lon='+zemSuradnica2+'&appid='+apiKey+'&units=metric')
    .then( resp => {
        if( !resp.ok ){
            return (resp.statusText + " " + resp.status)
        } else {                
            return resp.json()                
        }  
     })
     
         console.log(JSON.stringify(json.daily[1].weather[0].main))
         let i =JSON.stringify(json.daily[1].weather[0].main);
         console.log(i);
         
         if(i === "\"Rain\""){
           print("it's raining")
            
         }else if(i === "\"Clouds\""){
            print("it's cloudy")
           
         }else{
            print("it's sunny")
        
         }
    }
    
