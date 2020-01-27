import React from "react";

class ATTMForm extends React.Component {

    render() {
        return (
            <div>
                <form onSubmit={this.props.getActualTotalLoadMonth}>
                    <p><input type="text" name="AreaName" placeholder="Area name..." /></p>
                    <p><input type="text" name="ResolutionCode" placeholder="Time resolution..." /></p>
                    <p><input type="text" name="Year" placeholder="Year..." /></p>
                    <p><input type="text" name="Month" placeholder="Month" /></p>
                    <p><button>SHOW ME!</button></p>
                </form>
            </div>
        );
    }
}

export default ATTMForm;