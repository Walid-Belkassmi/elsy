import React from "react";
import './App.css';
import Box from './components/Box'
import "./styles/global.css"

const tempMin = -20
const tempMax = 40
const heartMin = 80
const heartMax = 180
const stepsMin = 0
const stepsMax = 5000

class App extends React.Component {
  constructor(){
    super()

    this.state = {
      water :0,
      heart : 120,
      temperature : -10,
      steps : 3000
    }
  }

  onHeartChange = (e) => {
    const point = e.target.value
    this.setState({heart: point})
  }

  onStepsChange = (e) => {
    const step = e.target.value
    this.setState({steps:step})
  }

  onWeatherChange = (e) => {
    const temp = e.target.value
    this.setState({temperature:temp})
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          {/* Water */}
          <Box 
            icon="local_drink" 
            color="#3A85FF" 
            value={1.5} 
            unit="L"
          />

          {/* Steps */}
          <Box 
            icon="directions_walk" 
            color="black" 
            value={this.state.steps} 
            min={stepsMin}
            max={stepsMax}
            change={this.onStepsChange}
            unit="steps"
          />

          {/* Heart */}
          <Box icon="favorite" 
            color="red" 
            value={this.state.heart}
            min={heartMin}
            max={heartMax}
            change={this.onHeartChange}
            unit="bpm"
          />

          {/* Temperature */}
          <Box icon="wb_sunny" 
            color="yellow" 
            value={this.state.temperature} 
            min={tempMin}
            max={tempMax}
            change={this.onWeatherChange}
            unit="°C"
          />
          
        </div>
      </div>
    );
  }
}

export default App;