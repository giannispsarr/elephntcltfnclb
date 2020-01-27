import React from "react";

class InitialForm extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.getData}>
                <select name="dataset" id="dataset">
                    <option>ActualTotalLoadDay</option>
                    <option>ActualTotalLoadMonth</option>
                    <option>ActualTotalLoadYear</option>
                    <option>DayAheadTotalLoadForecastDay</option>
                    <option>DayAheadTotalLoadForecastMonth</option>
                    <option>DayAheadTotalLoadForecastYear</option>
                    <option>AggregatedGenerationPerTypeDay</option>
                    <option>AggregatedGenerationPerTypeMonth</option>
                    <option>AggregatedGenerationPerTypeYear</option>
                    <option>ActualvsForecastDay</option>
                    <option>ActualvsForecastMonth</option>
                    <option>ActualvsForecastYear</option>
                </select>
                <button> Show parameters </button>
            </form>
        );
    }
}

export default InitialForm;