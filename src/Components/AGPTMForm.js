import React from "react";

class AGPTMForm extends React.Component {

    render() {
        return (
            <div>
                <form onSubmit={this.props.getAggregatedGenerationPerTypeMonth}>
                    <p><input type="text" name="AreaName" placeholder="Area name..." /></p>
                    <p><input type="text" name="ProductionType" placeholder="Production type..." /></p>
                    <p><input type="text" name="ResolutionCode" placeholder="Time resolution..." /></p>
                    <p><input type="text" name="Year" placeholder="Year..." /></p>
                    <p><input type="text" name="Month" placeholder="Month" /></p>
                    <p><button>SHOW ME!</button></p>
                </form>
            </div>
        );
    }
}

export default AGPTMForm;