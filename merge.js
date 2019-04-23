let nums1 = [1,2,3,0,0,0];
let nums2 = [2,5,6];


var merge = function(nums1, m, nums2, n){
  for(let i = 0; i < m - 1; i++){
    for(let j = 0; j < n - 1; j++){
      if(nums1[i] === nums2[j]){
        nums1.splice(j, 1, nums2[j]);
      } else if(nums1[i] > nums2[j]){
        nums1.splice(j-1, 1, nums2[j]);
      } else{
        nums1.splice(j, 1, nums2[j]);
      }
    }
  }

  return nums1;
}



console.log(merge(nums1, 3, nums2, 3));
