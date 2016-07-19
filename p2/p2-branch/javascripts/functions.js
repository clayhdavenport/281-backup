"use strict";
/* arrAvg 
   Finds average of the array
*/
var arrAvg = function(nums) {
    var avgNum = 0;
    var i = 0;
    // Go through array adding the numbers
    for (i = 0; i < nums.length; ++i) {
        avgNum = avgNum + nums[i];
    }
    //Divided total by number in array and returns value
    return (avgNum / nums.length);
};
arrAvg([2, 5, 7, 9]);

/* arrMax
  Finds largest number in a array
*/
var arrMax = function(nums) {
    var bigNum = 0;
    var i = 0;
    //Goes through searching for the largest number
    for (i = 0; i <= nums.length; ++i) {
        if (nums[i] > bigNum) {
            bigNum = nums[i];
        }
    }
    //returns largest number in the array
    return bigNum
};
arrMax([40, 44, 100, 41]);
/* isMember
  Finds if the string is contianed in the array
*/
var isMember = function(arr, string) {
    //Checks array for the string with .indexOf  
    if (arr.indexOf(string) !== -1) {
        //Returns true if string is assigend a value
        return true;
    } else {
        return false;
    }
};
isMember(["dog", "cat", "mouse"], "mouses");

/* maxWord EXTRA CREDIT
    Finds the longest word in a string
*/
var maxWord = function(string) {
    var splitString = string.split(" ");
    var longWord = 0;
    //Searches through array setting the longest element in the string
    for (var i = 0; i < splitString.length; ++i) {
        if (longWord < splitString[i].length) {
            longWord = splitString[i].length;
        }
    }
    //Returns longest word
    return longWord
};
maxWord("Hello Clay Davenport");

//Examples From Class. Not for a grade.

/* hasOneEven EXAMPLE FROM CLASS
   returns true if arr cintians at least one even number
*/
var a = [3, 7, 5, 20];
//Search for even numbers in array
var hasOneEven = function(arr) {
    for (var i = 0; i < arr.length; ++i) {
        if (arr[i] % 2 === 0)
            return true;
    }
    return false

};
hasOneEven(a);

/* isMember2 EXAMPLE FROM CLASS
   Finds if an array contains 2 or more instances of an string
   */
var a = ["a", "a", "b", "c"]
var isMember2 = function(arr, s) {
    var timesSoFar = 0;
    //Use a forEach loop
    arr.forEach(function(value) {
        if (value === s) {
            //hit
            ++timesSoFar;
        }
    });
    //Return result
    if (timesSoFar >= 2)
        return true;
    else
        return false;
};