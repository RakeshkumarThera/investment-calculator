export default function UserInput({onChange, userInput}){

    // const[userInput, setUserInput] = useState({              //Lifted state up to App.jsx for using same values for results.js also
    //     initialInvestment: 10000,                            // explained in floowing video: https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/39760382#overview
    //     annualInvestment: 1200,
    //     expectedReturn: 6,
    //     duration: 10,
    // });

    // function onChange(inputIdentifier, newValue){
    //     setUserInput(prevInputValues => {
    //         return {
    //             ...prevInputValues,
    //             [inputIdentifier]: newValue
    //         };
    //     });
    // }

    return(
       <section id="user-input">
         <div className="input-group">
            <p>
                <label>Initial Investment</label>
                <input type="number" required
                value={userInput.initialInvestment} 
                onChange={(event) => onChange('initialInvestment', event.target.value)}
                />
            </p>
            <p>
                <label>Annual Investment</label>
                <input type="number" required
                value={userInput.annualInvestment} 
                onChange={(event) => onChange('annualInvestment', event.target.value)}
                />
            </p>
         </div>
         <div className="input-group">
            <p>
                <label>Expected Duration</label>
                <input type="number" required
                value={userInput.expectedReturn} 
                onChange={(event) => onChange('expectedReturn', event.target.value)}
                />
            </p>
            <p>
                <label>Duration</label>
                <input type="number" required
                value={userInput.duration} 
                onChange={(event) => onChange('duration', event.target.value)}
                />
            </p>
         </div>
       </section>
    )
}