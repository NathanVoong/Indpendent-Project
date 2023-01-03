import {useState} from "react";
import convertToRomanNumerals from "./romanNumerals.js";

export function RomanNumeralsComponent() {

    let [romanNum, setRomanNum] = useState("")
    return (
        <div>
            <h4>Convert your number into roman numerals</h4>
            <form onSubmit={(event) => event.preventDefault()}>
                <input
                    placeholder="Enter your number..."
                    onChange={(event) => setRomanNum(parseInt(event.target.value))}
                />
                {!(romanNum > 0) ?
                    <h4>Your converted number is ...</h4>:
                    <h4>Your converted number is {convertToRomanNumerals(romanNum)}</h4>}
            </form>
        </div>
    )

}
