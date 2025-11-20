const rob = (nums) => {
    const dp = new Array(nums.length).fill(0);
    dp[0] = nums[0];
    if (nums.length >= 2) {
        dp[1] = Math.max(nums[0], nums[1]);
    }

    for (let i = 2; i < nums.length; i++) {
        dp[i] = Math.max(dp[i-2] + nums[i], dp[i-1]);
    }

    return dp[nums.length -1];
};

const rob2 = (nums) => {
    let prev = 0;    // dp[i-2]
    let curr = 0;    // dp[i-1]
    
    for (let num of nums) {
        const temp = curr;
        curr = Math.max(curr, prev + num);
        prev = temp;
    }
    
    return curr;
};