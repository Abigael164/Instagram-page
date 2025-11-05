import { useState} from 'react';
import './Randomquote.css';

function Randomquote(){
    const quotes = [
        "Success doesn't come from what you do occasionally, but from what you do consistently.",
        "Dream big, work hard, stay humble.",
        "Your future is created by what you do today, not tomorrow.",
        "Discipline is the bridge between goals and accomplishment.",
        "The harder you work for something, the greater you will feel when you achieve it."
    ]

const [quote, setQuote] = useState(quotes[0]);

const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length)
    setQuote(quotes[randomIndex]);
};
return(
    <div className='container'>
        <h1>Random Quote Generator</h1>
        <h2 className='myquote'>"{quote}"</h2>
        <button onClick={generateQuote}>New Quote</button>

    </div>
)

};
export default Randomquote;