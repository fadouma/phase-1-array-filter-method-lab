function findMatching(arrOfDrivers, string) {
     return arrOfDrivers.filter(driver => driver.toLowerCase() === string.toLowerCase());
     }
function fuzzyMatch(arrOfDrivers, letters) {
     return arrOfDrivers.filter(driver => driver.startsWith(letters)); 
    }
function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
}