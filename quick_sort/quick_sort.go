package main

import (
	"fmt"
)

var arr = []int{20, 43, 52, -1, 43, 29, 34}

func main() {
	fmt.Println("Unsorted: ", arr)
	quick_sort(arr)
	fmt.Println("Sorted: ", quick_sort(arr))
}

func quick_sort(arr []int) []int {
	var recurse func(left int, right int)
	var swap func(i int, j int)
	var partition func(left int, right int, pivot int) int

	swap = func(i int, j int) {
		var temp = arr[i]
		arr[i] = arr[j]
		arr[j] = temp
	}

	partition = func(left int, right int, pivot int) int {
		v := arr[pivot]
		right--
		swap(pivot, right)

		for i := left; i < right; i++ {
			if arr[i] <= v {
				swap(i, left)
				left++
			}
		}

		swap(left, right)
		return left
	}

	recurse = func(left int, right int) {
		if left < right {
			pivot := (right + left) / 2
			pivot = partition(left, right, pivot)
			recurse(left, pivot)
			recurse(pivot+1, right)
		}
	}

	recurse(0, len(arr))
	return arr
}
