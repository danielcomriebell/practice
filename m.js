//Find the median of two sorted arrays


const arr_1 = [1];
const arr_2 = [];


var findMedianSortedArrays = function(nums1, nums2){

    if(nums1.length === 0){
        return findMedian(nums2);
    } else if (nums2.length === 0){
        return findMedian(nums1);
    } else if(nums2.length === 0 && nums1.length === 0){
        return 'empty';
    } else{
        let arr_3 = nums1.concat(nums2);
        arr_3.sort();
        return findMedian(arr_3);
    }
};


var findMedian = function(arr){
    let mid = Math.floor(arr.length / 2);
    if (arr.length % 2 === 0) {
        let test1 = arr.slice(0, mid);
        let test2 = arr.slice(mid, arr.length);
        return (test1[test1.length - 1] + test2[0]) / 2;
    } else {
        return arr[mid];
    }
}


console.log(findMedianSortedArrays(arr_1, arr_2));