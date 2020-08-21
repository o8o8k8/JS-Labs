// 1.1 The Fortune Teller Classic Way (Var)
// var X = "Omar a Civil Engineer"
// var Y = "Riyadh"
// var Z = "egg and sausage"
// var N = 6
// console.log("I'm " + X 
// + " I live in " + Y 
// + ", I'm married to " + Z 
// + ", and I have " + N + " Kids!")


// 1.2 The Fortune Teller
// X = "Omar a Civil Engineer"
// Y = "Riyadh"
// Z = "egg and sausage"
// N = 6
// console.log("I'm " + X 
// + " I live in " + Y 
// + ", I'm married to " + Z 
// + ", and I have " + N + " Kids!")

// 2. The Age Calcluator
// date1 = new Date(1994, 08, 23) // 0 is january;
// date2 = new Date(1999, 08, 23); // 0 is january
// console.log("They are either " + Math.floor((Date.now() - date1) / 31557600000) + " or " + Math.floor((Date.now() - date2) / 31557600000) + "!")


// 3. The Lifetime Supply Calculator
// currentAge = Math.floor((Date.now() - new Date(1994, 08 ,23)) / 31557600000)
// maxAge = Math.floor((new Date(2070, 01, 01) - new Date(1994, 08 ,23)) / 31557600000)
// ageDiff = (maxAge - currentAge) *  (365)
// snakPerDay = 2
// neededSupply = snakPerDay * ageDiff
// console.log("You will need " + neededSupply + " to last you until the ripe old age of " + maxAge + "!")


// 4. The Geometrizer
// radius = 20; // Unit in cm
// circumference = (2*Math.PI*radius).toFixed(2);
// area = (Math.PI*radius**2).toFixed(2);
// console.log("The cirrcumference is " + circumference + ".")
// console.log("The area is " + area + ".")

// 5. The Temperature Converter

// celsiusDegrees = 37
// fahrenheitDegrees = 104

// celsius = Math.round((fahrenheitDegrees - 32) * (5/9))
// fahrenheit = Math.round((celsiusDegrees * 1.8) + 32)

// console.log(celsiusDegrees + "°C is " + fahrenheit + "°F.")
// console.log(fahrenheitDegrees + "°F is " + celsius + "°C.")




//////////////////////////////////////////////////////////
// هذي كلها تجارب أخذت وقت طويل لكنها أفادتني بأني أصل لأقصر كود

// var date1 = new Date(1994, 07, 23) // 0 is january;
// var date2 = new Date(1999, 07, 23);
// Today = new Date(2020, 08, 20);
// var age1 = Today.getFullYear() - date1.getFullYear();
// var age2 = Today.getFullYear() - date2.getFullYear();

// console.log(age1);
// console.log(age2);

// today = new Date();
// month = today.getMonth() + 1;
// year = today.getFullYear();
// date = today.getDate();
// currentDate = year + ", " + month + ", " + date
// Now = Date.now();