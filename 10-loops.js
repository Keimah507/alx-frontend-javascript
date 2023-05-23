export default function appendToEachArrayValue(array, appendString) {
    let iterator = 0;
    for (const idx of array) {  
      let value = array[iterator];
      array[iterator] = appendString + value;
      iterator++;
    }
  
    return array;
  }
  