import {useState} from "react";
import palindromeCheck from "./palindromeChecker.js";

export function PalindromeComponent() {

    let [palindrome, setPalindrome] = useState("")
    return (
        <div>
            <h4>Check if your text is a palindrome</h4>
            <form onSubmit={(event) => event.preventDefault()}>
                <input
                    placeholder="Enter your input..."
                    onChange={(event) => setPalindrome(event.target.value)}
                />
                {palindrome !== "" ?
                    palindromeCheck(palindrome) ?
                        (<h4>This is a palindrome</h4>) :
                        (<h4>This is not a palindrome</h4>):
                    <h4>Type something...</h4>}
            </form>
        </div>
    )

}
