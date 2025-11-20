const climbStairs = (n) => {
    let firstStage = 1, secondStage = 2, latestStage

    if (n < 3) {
        return n;
    }
    for (let i = 3; i <= n; i++) {
        latestStage = firstStage + secondStage;
        firstStage = secondStage;
        secondStage = latestStage;
    }
    return latestStage;
};

const climbStairs2 = (n) => {
    if (n < 3) {
        return n;
    }
    
    let dp = new Array(n + 1);
    dp[1] = 1;
    dp[2] = 2;
    
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    
    return dp[n];
};