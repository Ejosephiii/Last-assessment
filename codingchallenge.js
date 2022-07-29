let value = false;

const addTozero = () => {
    let zeroArray = [28, 43, -12, 30, 4, 0, 12]

for (let z = 0; z < array.length; z++) {
  for (let x = 0; x < array.length; x++) {
    if (z !== x) {
      if (zeroArray[z] + array[x] === 0) {
        value = true;
      } 
    }
  }
}
 //? O(log n)
console.log(value)
}






function longestWord(string) {
    let str = string.split(" ");
    let longest = 0;
    let word = null;
    for (let i = 0; i < str.length - 1; i++) {
        if (longest < str[i].length) {
            longest = str[i].length;
            word = str[i];
        }
    }
    return word;
}

//? this is O(n^2)

console.log(longestWord("super duuuuuuuper man sucks"))


const str = 'We promptly judged antique ivory buckles for the next prize';

const isPangram = (str = '') => {
   str = str.toLowerCase();
   const { length } = str;

   const alphabets = 'abcdefghijklmnopqrstuvwxyz';

   const alphaArr = alphabets.split('');

   for(let i = 0; i < length; i++){

      const el = str[i];
      const index = alphaArr.indexOf(el);

      if(index !== -1){
         alphaArr.splice(index, 1);
      };
   };
   return !alphaArr.length;
};
console.log(isPangram(str));

//? this is O(n^2)

function isUnique(str) {
    let obj = {};
    for (var z = 0; z < str.length; ++z) {
      let ch = str[z];
      if (obj[ch]) return false;
      obj[ch] = true;
    }
    return true;
  }

  //? this is O(n)
  
  console.log(isUnique("Monday"));

  console.log(isUnique("Moonday"));