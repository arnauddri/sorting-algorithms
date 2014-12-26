function shell_sort(arr) {
  for (var gap = arr.length; gap = parseInt(gap / 2);) {
    for (var i = gap;  i < arr.length; i ++) {
      var k = arr[i];
      for (var j = i;  j >= gap && k < arr[j-gap]; j -=gap) {
        arr[j] = arr[j-gap]
      }
      arr[j] = k;
    }
  }
  return arr;
}

var arr = [1, 6, 2, 3, 9, 4, 11, 10, 22, 8];

console.log(shell_sort(arr));
