const lengthOfLIS = (nums) => {
    const n = nums.length;
    let result = 1;
    const dp = new Array(n).fill(1);

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
        result = Math.max(dp[i], result);
    }
    
    return result
};