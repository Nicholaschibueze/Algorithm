const merge = function(nums1, m, nums2, n) {
    for(let i = m, j = 0; i < m + n; i ++){
        nums1[i] = nums2[j++];
    }
    nums1.sort((x,y)=> x-y);
};


// OUTPUT  
// [1,2,2,3,5,6]