// Package main provides ...
package main

import (
	"fmt"
)

func main() {
	list := []int{1, 3, 2, 8, 4, 10, 54, 49, 6}
	fmt.Println("unsorted: ", list)

	bubble_sort(list)
	fmt.Println("sorted: ", list)
}

func bubble_sort(a []int) {
	for itemCount := len(a) - 1; ; itemCount-- {
		swap := false
		for i := 1; i <= itemCount; i++ {
			if a[i-1] > a[i] {
				a[i-1], a[i] = a[i], a[i-1]
				swap = true
			}
		}
		if swap == false {
			break
		}
	}
}
