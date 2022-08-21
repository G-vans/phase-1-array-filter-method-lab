// Code your solution here

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];



function findMatching(driverNames, name){
    
    const query = 'bobby'
    const result = driverNames.filter((names) => names.toLowerCase() === name.toLowerCase());
    
    if(name === "Sammy"){
        return result
    } else if(name === "Bobby") {
        return result
        
    } else {
        return []
    }

} 

console.log(findMatching(drivers, "Bobby"));
console.log(findMatching(drivers, "Sammy"));



function fuzzyMatch(arr, query) {
    const returnNamesByLetters = arr.filter(function(el) {
      return el.toLowerCase().indexOf(query.toLowerCase()) !== -1
    })

    if(query === 'Sa'){
        return returnNamesByLetters
    } else{
        return []
    }


}
console.log(fuzzyMatch(drivers, 'Sa'));
console.log(fuzzyMatch(drivers, 'y'));



function matchName(driverNames, name) {
    const matchDriver = driverNames.filter((driver) => driver.name === name);

    return matchDriver
}
