class Formatter {
  //add static methods here

  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-'\s]+/g, '')
  }

  static titleize(string){
    let stringArray = string.split(" ")
    let finalArray = []


    stringArray.forEach(function(word){
      if (word === stringArray[0]){
        let firstWord = word.charAt(0).toUpperCase() + word.slice(1)
        finalArray.push(firstWord)
      }
      else if (word !== 'the' && word !== 'a' && word !== 'an' && word !== 'but' && word !== 'of' && word !== 'and'&& word !=='for'&& word !=='by'&& word!=='from'&& word!=='at') {
        let upperCaseWord = word.charAt(0).toUpperCase() + word.slice(1)
        finalArray.push(upperCaseWord)
      }
      else {
        finalArray.push(word)
      }
    })
    console.log(finalArray)
    return finalArray.join(" ")

  }
}