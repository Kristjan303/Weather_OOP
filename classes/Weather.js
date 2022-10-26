class Weather {
    constructor(city) {
        this.city = city
        this.key = "5919524c963e97110290a856859fbdec"
    }

    async getWeather(){
        const  responce = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.key}`)
        const responceData = await responce.json()
        return responceData
    }
    changeCity(city){
        this.city = city
    }
}