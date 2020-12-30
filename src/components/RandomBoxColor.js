import React from 'react';
import './RandomBoxColor.css';


class RandomBoxColor extends React.Component{

    constructor (props){
        super (props);

        this.state = {
            color : this.getRandomColor()
        }
    }

    componentDidMount (){
        setInterval(()=> {
            this.setState({color: this.getRandomColor() }) 
        },1000  ); 
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


    render () {
        //converting data to presentation:
        //convert color state to style 

        const {color} = this.state
        const boxStyle = {backgroundColor: color}

        return(
            <>
                <div className="box" style= {boxStyle}> </div>
            </>


        )
    }
}

export default RandomBoxColor;