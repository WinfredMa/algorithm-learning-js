const moveZeroes = (nums) => {
    let zeroNum = 0;

    for (let i = 0; i < nums.length - zeroNum; ) {
        if (nums[i] === 0) {
            nums.splice(i, 1);
            nums.push(0);
            zeroNum ++;
        } else {
            i++;
        }
    }
};

const moveZeroes2 = function(nums) {
    let n = nums.length, left = 0, right = 0;
    
    while (right < n) {
        if (nums[right] !== 0) {
            [nums[left], nums[right]] = [nums[right], nums[left]];
            left++;
        }
        right++;
    }
};