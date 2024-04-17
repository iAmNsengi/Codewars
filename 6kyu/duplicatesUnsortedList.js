
// Spin-off of this kata, here you will have to figure out an efficient strategy to solve the 
// problem of finding the sole duplicate number among an unsorted array/list of numbers starting from 1 up to n.

// Hints: a solution in linear time can be found; using the most intuitive ones to search for 
// duplicates that can run in O(n²) time won't work.


let findDup=function(nums){
     let tortoise = nums[0];
    let hare = nums[0];
    do {
        tortoise = nums[tortoise];
        hare = nums[nums[hare]];
    } while (tortoise !== hare);
    tortoise = nums[0];
    while (tortoise !== hare) {
        tortoise = nums[tortoise];
        hare = nums[hare];
    }
    return tortoise;
}