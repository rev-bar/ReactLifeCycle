import React from 'react';
import './RandomBoxColor.css';


class RandomBoxColor extends React.Component{

    constructor (props){
        super (props)

        this.state = {

            color : "red"
        }


    }

render () {
    //converting data to presentation:
    //convert color state to style 

    const {color} = this.state
    const boxStyle = {
        backgroundColor: color
    }

    return(
        <>
            <div className="box" style= {boxStyle}> </div>
        </>


    )
}


}




export default RandomBoxColor;