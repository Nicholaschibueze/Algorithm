function bubble_sort_algorithm(array) {
    const t0 = performance.now(); //this is just for calculating time, ignore it
    const length = array.length; //get the length of an array
    for (let i = 0; i < length; i++) {
      //Loop 1: go from 0 to the length - 1
      for (let j = length - 1; j > i; j--) {
        //Loop 2: go from length - 1, while larger than i, and decrement j
        if (array[j] < array[j - 1]) {
          //check for an element value if current element smaller than the previous element
          let temporary = array[j]; //do the swap
          array[j] = array[j - 1];
          array[j - 1] = temporary;
        }
      }
    }
    const t1 = performance.now();
    console.log(`Time spent executing the function - ${t1 - t0} miliseconds`);
    return array;
  }
  
  let array = [11, 10, 2, 5, 7];
  console.log(bubble_sort_algorithm(array));