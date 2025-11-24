const longestValidParentheses = (s) => {
    const stack = [-1];
    let maxLength = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i]==='(') {
            stack.push(i)
        } else {
            if (stack.length) {
                maxLength = Math.max(maxLength, i - stack[stack.length-1]);
            } else {
                stack.push(i);
            }
        }
    }

    return maxLength;
};

const longestValidParentheses2  = (s) => {
    const dp = new Array(s.length).fill(0);
    let  max  = 0;
    for (let i = 1; i < s.length; i++) {
        if(s[i] === ')') {
            if (s[i - 1] === '(') {
                dp[i] = (i >= 2 ? dp[i-2] : 0) + 2;
            } else if (i - dp[i - 1] > 0 && s[i - dp[i - 1] -1] === '('){
                dp[i] = dp[i-1] + 2 + (i - dp[i-1] >= 2 ? dp[i - dp[i-1] - 2] : 0)
            }
            max = Math.max(max, dp[i])
        }
    }

    return max
}