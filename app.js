const button = document.querySelector('#btn')

console.log(button)

button.addEventListener('click' , function(){
    console.log('clicked')
    getWeather()
})

function getWeather(){
    const city = document.getElementById('city').value

    console.log('affichage fuction get weather', city)



    
const apiKey =  'fe824cb856a37281c8c13e7a5fbbd488' ;
const url = 'https://api.openweathermap.org/data/2.5/weather?id={city id}&appid={API key}'

try{

    const reponse=  await fetch(url)
    const data = await reponse.json()
    console.log('Succcess Api:', data)

}
catch (error) {
    console.error('error from cath block')
    
}

}

