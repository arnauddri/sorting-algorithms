function quick_sort(arr) {

  function partition(left, right, pivot) {
    var v = arr[pivot];
    swap(pivot, --right);

    for (var i = left;  i < right; i ++) {
      console.log(arr, left, right, i, arr[i], v);
      if (arr[i] <= v) {
        swap(i, left++);
      }
    }
    swap(left, right);

    return left;
  }

  function swap(i, j) {
    var temp = arr[i];

    arr[i] = arr[j];
    arr[j] = temp;
  }

  function recurse(left, right) {
    if (left < right) {
      var pivot = ~~((left + right) / 2)
      pivot = partition(left, right, pivot);
      recurse(left, pivot);
      recurse(pivot + 1, right);
    }
  }

  recurse(0, arr.length)
  return arr;
}

var arr = [20, 43, 52, -1, 43, 29, 34];

console.log(quick_sort(arr));
