const longestPalindrome = (s) => {
    const expandAroundCenter = (str, left, right) => {
        while (left >=0 && right < str.length && str[left] === str[right]) {
            left--;
            right++;
        }

        return right - left - 1;
    }

    let startIndex = 0; endIndex = 0;
    for (let i = 0; i < s.length; i++) {
        let length1 = expandAroundCenter(s, i, i);
        let length2 = expandAroundCenter(s, i, i + 1);
        let length = Math.max(length1, length2);

        if (length > endIndex - startIndex) {
            startIndex = i - Math.floor((length -1) / 2);
            endIndex = i + Math.floor(length/2);
        }
    }

    return s.slice(startIndex, endIndex + 1);
};

const longestPalindrome2 = (s) => {
    const isPalindrome = (s, left, right) =>{
        while(left < right) {
            if (s[left] != s[right]) {
                return false;
            }
            left++;
            right--;
        }
    
        return true;
    }

    let length = s.length;
    if (length < 2) {
        return s;
    }
    let maxLength = 1;
    let begin = 0;

    for (let i = 0; i < length -1; i++) {
        for (let j = i + 1; j < length; j++) {
            if (j - i + 1 > maxLength && isPalindrome(s, i, j)) {
                maxLength = j - i +1;
                begin = i;
            }
        }

    }

    return s.substr(begin, maxLength);
}

const longestPalindromeDP = (s) => {
    const n = s.length;
    if (n < 2) {
        return s;
    }
    
    const dp = new Array(n).fill(false).map(() => new Array(n).fill(false));
    let maxLength = 1;
    let start = 0;
    
    for (let i = 0; i < n; i++) {
        dp[i][i] = true;
    }
    
    for (let length = 2; length <= n; length++) {
        for (let i = 0; i <= n - length; i++) {
            const j = i + length - 1;
            
            if (s[i] === s[j]) {
                if (length === 2 || dp[i + 1][j - 1]) {
                    dp[i][j] = true;
                    
                    if (length > maxLength) {
                        start = i;
                        maxLength = length;
                    }
                }
            }
        }
    }
    
    return s.substring(start, start + maxLength);
}

const longestPalindromeDP2 = (s) => {
    if (s.length === 0) {
        return "";
    }
    
    let start = 0, end = 0;
    const dp = new Array(s.length);
    
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j <= i; j++) {
            if (i === j) {
                dp[j] = true;
            } else if (j + 1 === i) {
                dp[j] = s[j] === s[i];
            } else {
                dp[j] = s[j] === s[i] && dp[j + 1];
            }
            
            if (dp[j] && i - j > end - start) {
                start = j;
                end = i;
            }
        }
    }
    
    return s.substring(start, end + 1);
};