// function selectionSortRecursive(arr) {
  // *iteration way*
// const sorted = [];
// while (arr.length > 0){
//   const min = Math.min(...arr);
//   const idx = arr.indexOf(min);

//   sorted.push(min);
//   arr.splice(idx, 1);
// }
// return sorted 
//   // type your code here
// }
// *second recursive way
function selectionSortRecursive(arr) {
  if (arr.length === 0){
    return [];
  }
  const min = Math.min(...arr);
  const idx = arr.indexOf(min);
  arr.splice(idx, 1);

  const result = selectionSortRecursive(arr);
  result.unshift(min);
  return result;
}
// *third recursive way*
// function selectionSortRecursive(arr) {
//   if (arr.length === 0){
//     return arr
//   }
//   let minIndex = 0
//   for (let i = 1; i < arr.length; i++){
//     if (arr[i] < arr[minIndex]){
//       minIndex = i;
//     }
//   }
//   let temp = arr[0]
//   arr[0] = arr[minIndex]
//   arr[minIndex] = temp 
//   return [arr[0]].concat(selectionSortRecursive(arr.slice(1)));
// }
if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSortRecursive([3, -1, 5, 2]));

  console.log("");
}

module.exports = selectionSortRecursive;

// Please add your pseudocode to this file
// And a written explanation of your solution
