import React from 'react';
import './RandomBoxColor.css';

class RandomBoxColor extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            color: this.getRandomColor()
        }
    }

    componentDidMount() {
        this.myInterval = setInterval(() => {
            const newColor = this.getRandomColor();
            console.log("updating new color to: " + newColor);
            this.setState({color: newColor});
        }, this.props.colorChangeInterval);
    }

    componentDidUpdate(prevProps, prevState) {
        // Check that the colorChangeInterval was changed
        if (this.props.colorChangeInterval !== prevProps.colorChangeInterval) {
            // 1) Stop the current interval
            clearInterval(this.myInterval);

            // 2) create a new interval with the new time
            this.myInterval = setInterval(() => {
                const newColor = this.getRandomColor();
                console.log("updating new color to: " + newColor);
                this.setState({color: newColor});
            }, this.props.colorChangeInterval);
        }
    }

    componentWillUnmount() {
        clearInterval(this.myInterval);
    }

    getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = "#";
        for (let i = 0; i < 6; i++) {
            const index = Math.floor(Math.random() * 16);
            color += letters[index];
        }

        return color;
    }

    render() {
        const {color} = this.state;

        // converting data to presentation
        // convert the color state to a style object 
        const myStyle = {backgroundColor: color}
        return (
            <>
                <div style={myStyle} className="box"></div>
            </>
        ) 
    }
}

export default RandomBoxColor;