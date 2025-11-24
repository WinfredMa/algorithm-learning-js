const maxProduct = (nums) => {
    let maxSofar = nums[0], minSofar = nums[0], result = nums[0];

    for (let i = 1; i < nums.length; i++) {
        let temp = maxSofar;
        maxSofar = Math.max(nums[i], maxSofar * nums[i], minSofar * nums[i]);
        minSofar = Math.min(nums[i], temp * nums[i], minSofar * nums[i]);

        result = Math.max(maxSofar, result);
    }

    return result;
};