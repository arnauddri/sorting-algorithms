function bubble_sort(arr) {
  var len = arr.length,
    swap = false;

  do {
    swap = false;
    for (var i = 1;  i <= len; i ++) {
      if (arr[i - 1] > arr[i]) {
        var temp = arr[i];
        arr[i] = arr[i - 1];
        arr[i - 1] = temp;
        swap = true;
      }
    }

    len--;
  } while (swap);

  return arr
}

var arr = [1, 6, 2, 3, 9 , 4, 11, 10, 22, 8];

console.log(bubble_sort(arr));
