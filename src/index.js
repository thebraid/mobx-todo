'use strict';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { decorate, observable, action, computed } from "mobx"
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

class Temperature {
    id = Math.random();
    @observable unit = "C";
    @observable temperatureCelsius = 25;
    @observable location = "Amsterdam, NL";

    // constructor(t, unit) {
    //     this.temperatureCelsius = t;
    //     this.unit = unit;
    // }

    constructor(location) {
        this.location = location;
    }

    @computed get temperatureKelvin() {
        console.log('calculating Kelvin');
        return this.temperatureCelsius * (9 / 5) + 32;
    }

    @computed get temperatureFahrenheit() {
        console.log('calculating Fahrenheit');
        return this.temperatureCelsius + 273.15;
    }

    @computed get temperature() {
        console.log("calculation temperature");
        switch (this.unit) {
            case "K":
                return this.temperatureKelvin + 'K';
            case "F":
                return this.temperatureFahrenheit + 'F';
            case "C":
                return this.temperatureCelsius + 'C';
        }
    }

    @action setUnit(newUnit) {
        this.unit = newUnit;
    }

    @action setCelsius(degrees) {
        this.temperatureCelsius = degrees;
    }

    @action("update temperature and unit")
    setTemperatureAndUnit(degrees, unit) {
        this.setCelsius(degrees);
        this.setUnit(unit);
    }

    @action inc() {
        this.setCelsius(this.temperatureCelsius + 1)
    }
};

const temps = observable([]);
// temps.push(new Temperature(20, "K"));
// temps.push(new Temperature(25, "F"));
// temps.push(new Temperature(20, "C"));

const App = observer(({ temperatures }) => {
    return (
        <div>
            <ul>
                test
                <TemperatureInput temperatures={temperatures}/>
                {temperatures.map(t => (
                    <TView key={t.id} temperature={t}/>
                ))}
            </ul>

            <DevTools/>
        </div>
    )
});

@observer
class TemperatureInput extends Component {
    @observable input = "";

    render() {
        return (
            <li>
                Destination
                <input onChange={this.onChange} value={this.input}/>
                <button onClick={this.onSubmit}>Add</button>
            </li>
        )
    }

    @action onChange = (e) => {
        this.input = e.target.value;
    };

    @action onSubmit = () => {
        this.props.temperatures.push(
            new Temperature(this.input)
        );
        this.input = "";
    }
}

@observer class TView extends Component {
    render() {
        const t = this.props.temperature;
        return (
            <li onClick={this.onTemperatureClick}>
                {t.location}:{t.temperature}
            </li>
        )
    }

    @action onTemperatureClick = () => {
        this.props.temperature.inc();
    }
}

ReactDOM.render(<App temperatures={temps}/>, document.getElementById("app"));

