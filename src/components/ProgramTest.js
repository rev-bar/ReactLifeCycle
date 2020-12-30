import React, { useEffect, useState } from 'react';
import { Container, InputGroup } from 'react-bootstrap';
import './ProgramTest.css';


function ProgramTest () {
    const [checkedState, setCheckedState] = useState();
 
      <>
    <div>
        <label>Have you Programmed before?</label>
        <Container className="text-center">
            <label>Yes</label>   
            <InputGroup.Radio name= "Programmed before"  >
            </InputGroup.Radio>
            <label>No</label>   
            <InputGroup.Radio name= "Programmed before" onClick = {() => setCheckedState(true) } >
            </InputGroup.Radio>
            <label>Partial</label>   
            <InputGroup.Radio name= "Programmed before"  >
            </InputGroup.Radio>
        </Container>

    </div>
    <div>
        <label>Have you Programmed in Java?</label>
        <Container className="text-center">
            <label>Yes</label>   
            <InputGroup.Radio   >
            </InputGroup.Radio>
            <label>No</label>   
            <InputGroup.Radio checked={checkedState} >
            </InputGroup.Radio>
            <label>Partial</label>   
            <InputGroup.Radio   >
            </InputGroup.Radio>
        </Container>

    </div>
    <div>
        <label>Have you Programmed in Pyton?</label>
        <Container className="text-center">
            <label>Yes</label>   
            <InputGroup.Radio   >
            </InputGroup.Radio>
            <label>No</label>   
            <InputGroup.Radio checked={checkedState} >
            </InputGroup.Radio>
            <label>Partial</label>   
            <InputGroup.Radio   >
            </InputGroup.Radio>
        </Container>
    </div>







</>

  )
}




export default ProgramTest;

    {/* <label>Have you Programmed before?</label>
    <Container className="text-center">
         <label>Yes</label>   
         <InputGroup.Radio aria-label="Radio button for following text input" >
        </InputGroup.Radio>
        <label>No</label>   
         <InputGroup.Radio aria-label="Radio button for following text input" >
        </InputGroup.Radio>
        <label>Partial</label>   
         <InputGroup.Radio aria-label="Radio button for following text input" >
        </InputGroup.Radio>
    </Container>

    <label>Have you Programmed in Java?</label>
    <Container className="text-center">
         <label>Yes</label>   
         <InputGroup.Radio aria-label="Radio button for following text input" >
        </InputGroup.Radio>
        <label>No</label>   
         <InputGroup.Radio aria-label="Radio button for following text input" >
        </InputGroup.Radio>
        <label>Partial</label>   
         <InputGroup.Radio aria-label="Radio button for following text input" >
        </InputGroup.Radio>
    </Container> */}