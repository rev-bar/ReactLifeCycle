import React from 'react';
import './RandomBoxColor.css';


class RandomBoxColor extends React.Component{

    constructor (props){
        super (props);
        this.counter = 0;
        
        this.state = {
            color : this.getRandomColor(),
        }
    }

    componentDidMount (){ 

        this.boxInterval = setInterval(()=> {
            this.setState({color: this.getRandomColor() }) 
        },1000  ); 
    }

    componentDidUpdate(prevProps, prevState) {

        

        if (this.counter < 9){
         
            this.counter = this.counter + 1;
            console.log (this.counter);
        }
        else {
            clearInterval (this.boxInterval);
        }

    }

    componentWillUnmount() {
        alert("Helpppp");
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