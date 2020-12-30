import React from 'react';
import './RandomBoxColor.css';


class RandomBoxColor extends React.Component{

    constructor (props){
        super (props);
        this.counter = 0;
        
        this.state = {
            // isBox : 1, 
            color : this.getRandomColor(),
            isBox : true
        }
    }

    componentDidMount (){ 
        this.boxInterval = setInterval(()=> {
            this.setState({color: this.getRandomColor() }) 
        },1000  ); 
    }

    componentDidUpdate(prevProps, prevState) {

        if (this.counter < 9){
            if (this.counter >= 4 ) {
                this.state.isBox = false
            }
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
        // console.log (this.state.isBox);
        const boxStyle =  {backgroundColor: color};
        this.boxStyle = {backgroundColor: color ,borderRadius: "50%" };
        
        if (this.state.isBox === 1) {
            
            // alert("1");    
        // } else{
            // this.boxStyle = {backgroundColor: color ,borderRadius: "50%" };
            // alert("1");
            console.log(this.boxStyle);
        }
        // 
        return(
            <>
                <div className={this.state.isBox ? "box" : "circle"}  style= {boxStyle}> </div>
            </>


        )
    }
}

export default RandomBoxColor;