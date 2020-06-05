import React, {Component} from 'react';
import '../css/CountryCompare.css';
import CanvasJSReact from '../lib/canvasjs.react';

let CanvasJSChart = CanvasJSReact.CanvasJSChart;

class CountryCompare extends Component {

    render() {

        const { dataCases, dataRecovered } = this.props.location.state;
        const { countryName } = this.props.match.params

        const optionsPie = {
            zoomEnabled: true,
            animationEnabled: true,
            width: 500,
            theme: "dark2",
            backgroundColor: "transparent",
            title: {
                text: countryName+ " cases global percent"
            },
            data: [{
                type: "pie",
                yValueFormatString: "##0.00\"%\"",
                toolTipContent: " <strong>{y}</strong>",
                indexLabel: "{country}: {y}",
                dataPoints: [
                    {y:(dataCases.worldCases-dataCases.countryCases)*100/dataCases.worldCases, country: "Rest of the world"},
                    {y:dataCases.countryCases*100/dataCases.worldCases, country: countryName}
                    ]
            }]

        }

        const optionsDoughnut = {
            zoomEnabled: true,
            animationEnabled: true,
            width: 500,
            theme: "dark2",
            backgroundColor: "transparent",
            title: {
                text: countryName + " recovered global percent"
            },
            data: [{
                type: "doughnut",
                startAngle: 60,
                yValueFormatString: "##0.00\"%\"",
                toolTipContent: " <strong>{y}</strong>",
                indexLabel: "{country}: {y}",
                dataPoints: [
                    {country: "Rest of the world", y:(dataRecovered.worldCases-dataRecovered.countryCases)*100/dataRecovered.worldCases},
                    {country: countryName, y:dataRecovered.countryCases*100/dataRecovered.worldCases}
                ]
            }]

        }
        return (
            <div>
            <div class="chart1">
                    <CanvasJSChart options={optionsPie}/>
            </div>
            <div class="chart2">
                    <CanvasJSChart options={optionsDoughnut}/>
            </div>
            </div>
        );
    }


}

export default CountryCompare;