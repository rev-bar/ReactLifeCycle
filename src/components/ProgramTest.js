import React, { useEffect, useState } from 'react';
import { Container, InputGroup } from 'react-bootstrap';
import './ProgramTest.css';


function ProgramTest () {

    const [checkedState, setCheckedState] = useState();
    const [question1, setQuestion1] = useState();
    const [question2, setQuestion2] = useState();
    const [question3, setQuestion3] = useState();
 
    useEffect(() => {
      if(question1 === 'option2'){
        setQuestion2('option2')  
      } else{
        setQuestion2() 
      }
      
        
      }, [question1])


    return(
        <>
            <div value = {question1}  >
                <label>Have you Programmed before?</label>
                <Container className="text-center">
                    <label>Yes</label>   
                    <InputGroup.Radio value="option1" checked={question1 === 'option1'} onChange= {(e) => setQuestion1(e.target.value)}  >
                    </InputGroup.Radio>
                    <label>No</label>   
                    <InputGroup.Radio  value="option2" checked={question1 === 'option2'} onChange= {(e) => setQuestion1(e.target.value)} >
                    </InputGroup.Radio>
                    <label>Partial</label>   
                    <InputGroup.Radio  value="option3" checked={question1 === 'option3'} onChange= {(e) => setQuestion1(e.target.value)}  >
                    </InputGroup.Radio>
                </Container>
            </div>
            <div value = {question2}  >
                <label>Have you Programmed in java??</label>
                <Container className="text-center">
                    <label>Yes</label>   
                    <InputGroup.Radio value="option1" checked={question2 === 'option1'} onChange= {(e) => setQuestion2(e.target.value)}  >
                    </InputGroup.Radio>
                    <label>No</label>   
                    <InputGroup.Radio  value="option2" checked={question2 === 'option2'} onChange= {(e) => setQuestion2(e.target.value)} >
                    </InputGroup.Radio>
                    <label>Partial</label>   
                    <InputGroup.Radio  value="option3" checked={question2 === 'option3'} onChange= {(e) => setQuestion2(e.target.value)}  >
                    </InputGroup.Radio>
                </Container>
            </div>
        </>    
    )
     


}


export default ProgramTest;

