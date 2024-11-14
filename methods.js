// 1. Convert to Uppercase- stringin toUpperCase methodu ile kicik yazilmish herfleri boyuk herflerle yazdiq, logda hem kicik, hem de boyuk yazilmish versiyani gosterdik

let words = "golden retriever"
let result = words.toUpperCase("")
console.log(words);
console.log (result);

// 2. Find the Length of a String2 - Burada yazilmish stringin length methodu ile umumi sayini tapdiq 

let question = "Can you solve this problem?"
let result2 = question.length;
console.log(question);
console.log (result2);

// 3. Replace a Word in a String - Stringin Replace methodu ile boring sozunu exciting sozu ile evezledim
let activity = "This game is boring"
let result3 = activity.replace ("boring","exciting");
console.log(activity);
console.log(result3);

// 4. Extract a Substring- substring methodu ile boluruk, burda deyirik 11-ci index 21-e qeder saxla, slice kimi ishleyir ama menfi indeksi desteklemir
let headline = "Choose Your Adventure!" 
let result4 = headline.substring (11,21);
console.log(headline);
console.log(result4);

// Part 2 -1.Array Methods -// Add an Item to an Array-verilmis neticede axira cake elave edilib, ona gore sona push methodu vasitesile axirinci element  elave edirik.
let desserts = ["Ice Cream", "Pie", "Pudding"];
let result5 = desserts.push ("Cake")
console.log(desserts);


// 2. Check if an Array Includes an Item - Includes methodu vasitesile yoxlayiriq ki verilmish arrayin icuinde hansisa deyer varmi? netice olaraq bize boolean yeni true ya false qaytarir
let cities = ["London", "New York", "Tokyo"];
let result6 = cities.includes ("Paris");
console.log(result6);


// 3. Combine the  cars  array with the  trucks  array - concat methodu ile biz hem kopyalaya hem birleshdire bilerik. concatla biz neticede yeni arrayyaradiriq
let cars = ["Sedan", "Coupe"];
let trucks = ["Pickup", "SUV"];
let result7 = cars.concat (trucks)
console.log(result7);



// // 4.Find the Index of an Item in an Array - indexOf methodu ile biz istediyimiz elementin index nomresini tapa bilirik
let deserts = ["Ice Cream", "Pie", "Pudding", "Cake"];
let result8 = deserts.indexOf ("Pie")
console.log(result8);


// Bonus task - stringde birbaşa reverse metod yoxdur. Buna gore biz birinci stringi split metodu ile massive ceviririk, daha sonra reverse edirik, sonra yeniden join metodu ile string kimi birlesdiririk.
let word = "Technology"
let resultBonus = word.split("").reverse().join("");
console.log(resultBonus);



