const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 
//todo extraLargeArr
//? in the insert, it takes about 836ms, whereas the insert only takes 5ms

//todo tinyArr
//? the tinyArr is O(1) with the doubler and O(n) with insert 
//!insert 44.9 μs append 140.6 μs

//todo smallArr
   //? the smallArr is O(1) with the doubler and O(n^2) with insert 
   //! insert 47 μs append 173 μs


//todo mediumArr
//? the smallArr is O(1) with the doubler and O(n^2) with insert 
//! insert 142 μs append 111.2 μs


//todo largeArr
//? the smallArr is O(1) with the doubler and O(o log n) with insert 
//!insert 7.9561 ms append 503 μs


//? I noticed the the bigger number you pass in the longer it takes the function to run the doubler function scales better, because all it's doing is adding something to the start of the array, whereas the insert function is using unshift, adds new elements to the begginning of an array and returns the new length, so it doesn't scale as well

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(largeArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(largeArray);
let resultsInsert = perf.stop();


console.log('Results for the tinyArr');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);
