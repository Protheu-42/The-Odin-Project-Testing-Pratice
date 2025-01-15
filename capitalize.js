export function capitalize(inputString){
    const firstLetter = inputString.charAt(0).toUpperCase();
    const restOfTheString = inputString.slice(1);
    return firstLetter + restOfTheString
}