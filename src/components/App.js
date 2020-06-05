import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import '../css/App.css';
import CountryData from "./CountryData";


class App extends Component {

    render() {
        return (
            <div>
            <h1>Coronavirus statistics by country</h1>
                <Router>
                    <Route path="/" component={CountryData}/>
                </Router>
            </div>
        );
    }

    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }

}

export default App;
