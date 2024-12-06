const button = document.getElementById('get-weather')
const dispWeather = document.querySelector('#display-weather')



const getWeather = async () => {
    const url = "https://opendata.aemet.es/opendata/sh/7ed26c99"
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error. Status: ${response.status}`);
        }
    const data = await response.json();
console.log (data)
    return data;
    } catch (error) {
        console.error('Error fetching data. ', error);
    }
    
}


button.addEventListener('click', function () {
    getWeather()
    console.log('el botón está funcionando');
})