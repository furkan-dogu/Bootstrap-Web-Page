//* Trolls are attacking your comment section!
//* A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
//* Your task is to write a function that takes a string and return a new string with all vowels removed.
//* For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
//* Note: for this kata y isn't considered a vowel.

let input = "This website is for losers LOL!";

let sesliler = ["a", "e", "ı", "i", "o", "ö", "u", "ü"];

// function removeVowels(cumle) {
//   let newArr = cumle.split("");
//   let lastArr = []
//   for (let i = 0; i < newArr.length; i++) {
//     if(sesliler.indexOf(newArr[i].toLowerCase()) === -1) {
//         lastArr.push(newArr[i])
//         // console.log(newArr[i]);
//     }
//   }
//   return lastArr.join("")
// }

const replaceFunc = (a) => {
  return a.replace(/[aeıioöuü]/gi, "");
};




console.log(replaceFunc(input));
