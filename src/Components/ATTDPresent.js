import React from "react";

class ATTDPresent extends React.Component {

    render() {
        return (
            <div>
                <p>Values: {this.props.ActualTotalLoadValues}</p>
            </div>
        );
    }
}

export default ATTDPresent;