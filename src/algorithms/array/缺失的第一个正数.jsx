const firstMissingPositive = (nums) => {
    let n = nums.length;

    for (let i = 0; i < n; i++) {
        while (nums[i] > 0 && nums[i] <= n && nums[nums[i] -1] != nums[i]) {
            let temp = nums[nums[i] -1];
            nums[nums[i] -1] = nums[i];
            nums[i] = temp;
        }
    }

    for (let j = 0; j < n; j++) {
        if (nums[j] !== j + 1) {
            return j+1
        }
    }
    return n + 1
};
