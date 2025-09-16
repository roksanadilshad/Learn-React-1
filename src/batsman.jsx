import { useState } from "react"

export default function Batsman(){
    const [runs, setRun] = useState(0);
    const [six, setSix] = useState(0);
    const [four, setfour] = useState(0);

    const handleSingle = () => {
        //const newSingle = runs + 1;
        setRun(runs + 1)
    }
    const handleFour = () => {
        // const newfour = runs + 4;
        // const countfour = four + 1;
        setfour(four + 1);
        setRun(runs + 4)
    }
    const handleSix = () => {
       // alert('Got Six')
        // const newSix = runs + 6;
        // const countSix = six + 1;
        setSix(six + 1);
        setRun(runs + 6)
    }
    return (
        <div>
            <h1>Bangla Tiger</h1>
            <h2>Score:{runs} </h2>
            <h3>Four: {four}</h3>
            <h3>Six: {six}</h3>
            {
               runs > 50  && <p>Half-century</p>
            }
            {
                runs > 100 && <p>century</p>
            }
            <button onClick={handleSingle}>Single</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>
        </div>
    )
}