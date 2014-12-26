function merge_sort(arr) {
  sort(arr)
}

function merge(left, right, arr) {
  var a = 0;

  while (left.length && right.length)
    arr[a++] = (right[0] < left[0]) ?
      right.shift() :
      left.shift();

  while (left.length)
    arr[a++] = left.shift();

  while (right.length)
    arr[a++] = right.shift();
}

function sort(arr) {
  var len = arr.length;
  if (len === 1)
    return;

  var mid   = Math.floor(len / 2),
      left  = arr.slice(0, mid),
      right = arr.slice(mid)

  sort(left)
  sort(right)
  merge(left, right, arr)
}

var arr = [1, 6, 2, 3, 9, 4, 11, 10, 22, 8];

for (var i = 0;  i < 100; i ++) {
  var arr
  for (var j = 0;  j < 100; j ++) {
    arr[i] = parseInt(Math.random() * 100);
  }

  console.log('unsorted: ', arr);
  merge_sort(arr);
  console.log('sorted: ', arr);
}
