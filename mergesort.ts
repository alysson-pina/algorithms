// mergesort
type Input = number[];

function mergesort(array: Input) {
  if( array.length <= 1 ) {
    return array;
  }

  const middle = array.length / 2;
  const firstHalf = array.slice(0, middle);
  const secondHalf = array.slice(middle);

  const orderedFirst = mergesort(firstHalf);
  const orderedSecond = mergesort(secondHalf);

  return merge(orderedFirst, orderedSecond);
}

function merge(orderedArray1: Input, orderedArray2: Input) {
  let i = 0;
  let j = 0;

  const mergedArray = [];
  const n = orderedArray1.length + orderedArray2.length;

  for( let k = 0; k < n; k++ ){
    if (i === orderedArray1.length) {
      return mergedArray.concat( orderedArray2.slice(j) );
    } else if (j === orderedArray2.length) {
      return mergedArray.concat( orderedArray1.slice(i) );
    }

    if( orderedArray1[i] < orderedArray2[j] ) {
      mergedArray[k] = orderedArray1[i];
      i += 1;
    } else {
      mergedArray[k] = orderedArray2[j];
      j += 1;
    }
  }

  return mergedArray;
}