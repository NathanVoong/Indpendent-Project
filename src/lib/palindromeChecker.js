function palindromeCheck(str) {

    const lowerCaseStr = str.toLowerCase();
    const splitStr = lowerCaseStr.split("");
    const regex = /[^a-zA-Z0-9]/;

    for (let i in splitStr) {
        if (regex.test(splitStr[i])) {
            splitStr[i] = "";
        }
    }
    const originalStr = splitStr.join("");

    for (let i = originalStr.length; i > 0; i--) {
        if (originalStr[i-1] !== originalStr[originalStr.length-i]) {
            return false;
        }
    }
    return true;

}

export default palindromeCheck