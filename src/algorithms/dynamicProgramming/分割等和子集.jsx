const canPartition = (nums) => {
    let sum = 0, maxNum = 0;
    
    for (let num of nums) {
        sum += num;
        maxNum = Math.max(maxNum, num);
    }
    const targetVal = sum / 2;
    if (sum % 2 !== 0 || maxNum > targetVal) {
        return false;
    }
    
    const dp = new Array(targetVal + 1).fill(false);
    dp[0] = true;

    for (let i = 0; i < nums.length; i++) {
        for (let j = targetVal; j >= nums[i]; j--) {
            if (dp[j - nums[i]]) {
                dp[j] = true;
            }
        }
        if (dp[targetVal]) {
            return true;
        }
    }

    return dp[targetVal]
};