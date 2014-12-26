function insertion_sort(arr) {
  var len = arr.length;

  for (var i = 1;  i < len; i ++) {
    var temp = arr[i],
        j    = i;

    while ((j > 0) && (arr[j - 1] > temp)) {
      arr[j] = arr[j - 1];
      j--;
    }
    arr[j] = temp;
  }

  return arr;
}

var arr = [1, 6, 2, 3, 9 , 4, 11, 10, 22, 8];

console.log(insertion_sort(arr));
