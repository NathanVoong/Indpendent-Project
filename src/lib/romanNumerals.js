function convertToRomanNumerals(num) {

    const numerals = [[1000, 'M'], [900, 'CM'],[500, 'D'],
        [400, 'CD'], [100, 'C'], [90, 'XC'],
        [50, 'L'], [40, 'XL'], [10, 'X'],
        [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']];
    let result = "";

    for (const [value, numeral] of numerals) {
        if (num/value>= 1) {
            let e = Math.floor(num/value);
            num -= e*value;
            for (let j = 0; j < e; j++) {
                result += numeral;
            }
        }
    }
    return result;

}

export default convertToRomanNumerals

