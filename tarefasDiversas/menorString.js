const getSmallerWord = (str) => {
    if(!str || typeof str !== "string") return null

    const strArr = str.trim().split(" ")

    let smallerWord = strArr[0]

    for(let i = 1; i < strArr.length; i++) {
        if(strArr[i].length < smallerWord.length) {
            smallerWord = strArr[i]
        }
    }

    return smallerWord
}

console.log(getSmallerWord("JavaScript é melhor que Java"))