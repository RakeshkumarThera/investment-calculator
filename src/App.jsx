import {React, useState} from "react";
import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Results from "./components/Results"

function App() {

    const[userInput, setUserInput] = useState({              //Lifted state up to App.jsx for using same values for results.js also
        initialInvestment: 10000,                            // explained in floowing video: https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/39760382#overview
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10,
    });

    function handleChange(inputIdentifier, newValue){
      setUserInput(prevInputValues => {
          return {
              ...prevInputValues,
              [inputIdentifier]: newValue
          };
      });
    }

    const isInputValid = userInput.duration >= 1; //to avoid the negative duration in investing as that is not possible

  return (
    <>
     <Header />
     <UserInput userInput={userInput} onChange={handleChange} />
     {isInputValid ? (<Results input={userInput} />) : (<p className="center">Please enter duration value greater or minimum of 1 year! thnx!!</p>)}  {/*  state lifted to use in Results and also to verify of duration value is valid or not*/}
    </>
  )
}

export default App
 