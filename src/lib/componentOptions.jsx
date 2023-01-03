export function Options({isVisible, setIsVisible}) {

    return (
        <div>
            <button className="count" onClick={() => {
                if (isVisible === "count") {
                    setIsVisible("nothing")
                } else {
                    setIsVisible("count")
                }
            }}>
                Count Game
            </button>
            <button onClick={() => {
                if (isVisible === "romanNumerals") {
                    setIsVisible("nothing")
                } else {
                    setIsVisible("romanNumerals")
                }
            }}>
                Roman Numeral Converter
            </button>
            <button onClick={() => {
                if (isVisible === "palindrome") {
                    setIsVisible("nothing")
                } else {
                    setIsVisible("palindrome")
                }
            }}>
                Palindrome Checker
            </button>
        </div>
    )

}