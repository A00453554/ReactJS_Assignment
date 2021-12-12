import React, { useState, Component } from "react";

class Weather extends Component {
    constructor(props) {
        super(props)
        this.state = {
            temp: 0,
            sunny: window.location.origin + "/assets/sunny.png",
            mild: window.location.origin + "/assets/mild.png",
            cold: window.location.origin + "/assets/cold.png",
            metric : 'C',
            other: 'F'
        }
        this.fetchData = this.fetchData.bind(this);
    }

    fetchData() {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=guwahati&appid=fe4feefa8543e06d4f3c66d92c61b69c")
            .then(response => {
                return response.json()
            })
            .then(response => {
                this.setState({
                    temp: Math.floor(parseInt(response.main.temp) - 273)
                })
                
            });
    }

    componentDidMount() {
        this.fetchData()
    }

    render() {
        if(this.state.temp > 10 && this.state.temp < 20)
        {
            this.state.pic = this.state.mild;
        }
        else if(this.state.temp >= 20){
            this.state.pic = this.state.sunny;
        }
        else{
            this.state.pic = this.state.cold;
        }
        
        return (
            <div className="weather">
            <div id="div_image">
            <img src={this.state.pic}/>
            </div>
            <div id="div_text">
            <h3>Temp: {this.state.temp} &deg;{this.state.metric}</h3>
            </div>
            </div>
        )
    }
    
}

export default Weather;