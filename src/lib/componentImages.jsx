import {randomCat, randomDog} from "./fetchImage.js";

export function ImageButtons({setIsVisible, optionsVisible, setOptionsVisible}) {

    return (
        <div>
            <button onClick={() => {
                if (optionsVisible === true) {
                    setOptionsVisible(false)
                    setIsVisible("filter")
                } else {
                    setOptionsVisible(true)
                    setIsVisible("nothing")
                }
            }}>
                Generate random images
            </button>
        </div>
    )

}

export function ImageFilter({setImage}) {

    return (
        <div>
            <button onClick={async () => {
                const catImage = await randomCat();
                setImage(catImage)
            }}>
                Click for cats
            </button>
            <button onClick={async () => {
                const dogImage = await randomDog();
                setImage(dogImage);
            }
            }>
                Click for dogs
            </button>
        </div>
    )

}