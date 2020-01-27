import React from "react";

class AGPTDForm extends React.Component {

    render() {
        return (
            <div>
                <form onSubmit={this.props.getAggregatedGenerationPerTypeDay}>
                    <p><input type="text" name="AreaName" placeholder="Area name..." /></p>
                    <p><input type="text" name="ProductionType" placeholder="Production type..." /></p>
                    <p><input type="text" name="ResolutionCode" placeholder="Time resolution..." /></p>
                    <p><input type="text" name="Year" placeholder="Year..." /></p>
                    <p><input type="text" name="Month" placeholder="Month" /></p>
                    <p><input type="text" name="Day" placeholder="Day..." /></p>
                    <p><button>SHOW ME!</button></p>
                </form>
            </div>
        );
    }
}

export default AGPTDForm;