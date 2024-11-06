/**********
 * DATA *
 **********/

const sixes = [];
const doubleSixes = [];
const twelves = [];
const twenties = [];

/********************
 * HELPER FUNCTIONS *
********************/

const getRandomNumber = function(max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);
    return result;
}

const sortByNumber = function(arr) {
  const byNumber = function(item1, item2) {
    return item1 - item2;
  }

  return arr.slice().sort(byNumber);
}

/*******************
 * YOUR CODE BELOW *
 *******************/
const d6 = document.querySelector('#d6-roll')
const d6Mean = document.querySelector('#d6-rolls-mean')
const d6Median = document.querySelector('#d6-rolls-median')
const d6Mode = document.querySelector('#d6-rolls-mode')


/*******************
 * EVENT LISTENERS *
 *******************/
d6.addEventListener('click' , () =>{
  const random = getRandomNumber(6)        //roll random number 1-6
  d6.src = `./images/d6/${random}.png`    //change img src to the number
  sixes.push(random)                     //add to data storage
  d6Mean.innerText = findMean(sixes).toFixed(2)
d6Median.innerText = findMedian(sixes).toFixed(2)
d6Mode.innerText = findMode(sixes)
})




/******************
 * RESET FUNCTION *
 ******************/



/****************************
 * CLICK HANDLING FUNCTIONS *
****************************/



/****************
 * MATH SECTION *
 ****************/
//Mean
//Add up all num and divide by quantity
function findMean(numArr){
  let sum = 0
  for(let i = 0; i < numArr.length; i++){
    sum += numArr[i]
  }
  return sum / numArr.length //returns average
}


//Median
// 1,2,3,4, 5  //in a list of 5, 2 is the index of the median (#3)
// 1, 2, 3, 4, 5, 6, 7 //in list of 7, 3 is index of the median (#4)
// 1,2,3,4,5,6,7,8,9 //in list of 9, 4 in index of median (#5)

// 1, 2, 3, 4 //in array of 4, take average of index 1 & 2
// 1,2,3,4,5,6 //in an array of 6, take average of index 2 & 3
// 1,2,3,4,5,6,7,8 //in an array of 8, take average of index 3 & 4
function findMedian(numArr){
  //sort through array
const sortedArr = sortByNumber(numArr)
  //if array is odd num, divide length by 2, and round down (or subtract 0.5)
  if(numArr.length % 2 !== 0){
    const medianIndex = numArr.length / 2 -.5
    return sortedArr[medianIndex]
  }else{
// if array is even num, divide length by 2, find average of that that and that -1
const firstIndex = numArr.length / 2
const secondIndex = numArr.length / 2 - 1
  }
}

//Mode
// Most repeated num
// frequency map  -- object that tells how often it occurred 
let map = {
  1: 20,
  2: 10,
  3: 14,
  4: 9,
  5: 4,
  6: 22
}

function findMode(numArr){
  //Need to make a frequency map
  //how to make frequency map
  //intialize map {}
  const map = {}
  //loop through numbers
  for(let num of numArr){
    if(map[num] !== undefinded){   //if the key exists in object
      map[num] = map[num]++
    }else{                         //if key does not exist
        map[num] = 1
    }
  }
  // add to count/map

  let max = 0
  let mode = null //initialize for use
  //Need to find the mode using it
  for(let key in map){
    if(map[key] > max){
        max = map[key]     //save new highest number
        mode = key         //save the key of the highest number
    }
  } return mode
}