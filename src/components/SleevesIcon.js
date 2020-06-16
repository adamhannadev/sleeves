import React, { Component } from 'react';

class SleevesIcon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
        };
    }

    componentDidMount() {
        const access_key = 'dadd8a499b170b2dbeed3cceb3121419';
        const query = 'Victoria, Canada';
        fetch(`http://api.weatherstack.com/current?access_key=${access_key}&query=${query}`)
            .then(response => response.json())
            .then(data => this.setState({ data }));
    }

    render(props) {
        const { data } = this.state;
        return (
            <div className="sleeves-icon" >
                <h2>Sleeves Icon</h2>
                {data ? data.current.temperature : 'None'}
            </div>
        );
    }
}

export default SleevesIcon;
