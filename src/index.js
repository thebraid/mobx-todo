import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { decorate, observable, action, computed } from "mobx"
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

window.t = new class Temperature {
    @observable unit = "C";
    @observable temperatureCelsius = 25;

    @computed get temperatureKelvin() {
        console.log('calculating Kelvin');
        return this.temperatureCelsius * (9 / 5) + 32;
    }

    @computed get temperatureFahrenheit() {
        console.log('calculating Fahrenheit');
        return this.temperatureCelsius + 273.15;
    }

    @computed get temperature() {
        switch (this.unit) {
            case "K":
                return this.temperatureKelvin + 'K';
            case "F":
                return this.temperatureFahrenheit + 'F';
            case "C":
                return this.temperatureCelsius + 'C';
        }
    }
};

const App = observer(({ temperature }) => {
    return (
        <div>
            temperature = {temperature.temperature}
            <DevTools/>
        </div>
    )
});

ReactDOM.render(<App temperature={t}/>, document.getElementById("app"));

