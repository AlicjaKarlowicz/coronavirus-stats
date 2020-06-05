import React, {Component} from 'react';
import '../css/CountryData.css';
import {BrowserRouter as Router, 
    Route, Link} from "react-router-dom";
import CountryCompare from "./CountryCompare";

const API = "https://coronavirus-19-api.herokuapp.com/countries";

class CountryData extends Component {

    constructor(props) {
        super(props);

        this.state = {
            countries:[]
        };
    }


    componentDidMount() {

        this.didMount = true;
        fetch(API)
            .then(result => result.json())
            .then(data => {
                this.setState({countries: data})
            })

            .catch(err => console.log(err))
    }


    render() {

        let { countries } = this.state;

        let { world } = {};

        if (this.didMount) {
           world = countries[0];
           console.log(world);
        }


        countries = countries.filter(el => el.country != "World");
        return (
            <Router>
                <Route path="/compare/:countryName" component={CountryCompare}/>
            <ul>
                {countries.map(country =>
                    <li key={country.country}>
                        <h2>{country.country}</h2>
                        <p>Cases: {country.cases}</p>
                        <p>Recovered: {country.recovered}</p>
                        <p>Tests: {country.totalTests}</p>
                        <button>
                        <Link to={{
                            pathname:`/compare/${country.country}`,
                            state: {
                                dataCases: {
                                    countryCases:`${country.cases}`,
                                    worldCases: `${world.cases}`
                                },
                                dataRecovered: {
                                    countryCases:`${country.recovered}`,
                                    worldCases:  `${world.recovered}`
                                }

                            }
                        }}>Compare</Link>
                        </button>
                    </li>
                )}
            </ul>

    </Router>

        );
    }

}

export default CountryData;
