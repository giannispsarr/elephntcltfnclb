import React from "react";

class DATLYForm extends React.Component {

    render() {
        return (
            <div>
                <form onSubmit={this.props.getDayAheadTotalLoadForecastYear}>
                    <p><input type="text" name="AreaName" placeholder="Area name..." /></p>
                    <p><input type="text" name="ResolutionCode" placeholder="Time resolution..." /></p>
                    <p><input type="text" name="Year" placeholder="Year..." /></p>
                    <p><button>SHOW ME!</button></p>
                </form>
            </div>
        );
    }
}

export default DATLYForm;