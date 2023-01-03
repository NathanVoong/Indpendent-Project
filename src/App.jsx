import { useState } from 'react'
import './App.css'
import {PalindromeComponent} from "./lib/componentPalindrome.jsx";
import {RomanNumeralsComponent} from "./lib/componentRomanNumerals.jsx";
import {CountGame} from "./lib/componentCountGame.jsx";
import {ImageFilter, ImageButtons} from "./lib/componentImages.jsx";
import {Options} from "./lib/componentOptions.jsx";

function App() {
  let [isVisible, setIsVisible] = useState("options")
  let [randomImage, setImage] = useState('https://media.istockphoto.com/id/1272808233/vector/welcome-or-invitation-sign-onboarding-or-successful-registration-vector.jpg?s=612x612&w=0&k=20&c=gF4KqEFUZv36t-xxBQ9Pg3logwiN5Z7hTl_y0h_mdJU=')
  let [optionsVisible, setOptionsVisible] = useState(true)

  return (
    <div className="App">
        <img src={randomImage} alt="My Image" style={{ width: '275px', height: '250px' }}/>
        <h1>Random stuff</h1>
        <div>
            <ImageButtons
                setIsVisible = {setIsVisible}
                optionsVisible = {optionsVisible}
                setOptionsVisible = {setOptionsVisible}
            />
            <p>
                {optionsVisible === true && (
                    <Options
                        isVisible={isVisible}
                        setIsVisible={setIsVisible}
                    />
                )}
                {isVisible === "count" && (
                    <CountGame/>
                )}
                {isVisible === "romanNumerals" && (
                    <RomanNumeralsComponent/>
                )}
                {isVisible === "palindrome" && (
                    <PalindromeComponent/>
                )}
                {isVisible === "filter" && (
                    <ImageFilter
                        setImage = {setImage}
                    />
                )}
            </p>
        </div>
    </div>
  )

}

export default App
