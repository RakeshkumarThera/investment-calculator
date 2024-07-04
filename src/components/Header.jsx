import logo from '../assets/investment-calculator-logo.png';

export default function Header(){
    return(
        <header id="header">
            <img id='header-image' src={logo} />
            <h1>Investment Calculator</h1>
        </header>
        
    )
}