const lengthOfLongestSubstring = (s) => {
    let map = new Map();
    let max = 0;
    let start = 0;
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (map.has(char)) {
            // Keep the start index to the right of the last seen index eg. 'abba'
            start = Math.max(start, map.get(char) + 1);
        }
        map.set(char, i);
        max = Math.max(max, i - start + 1);
    }

    return max;
}

const lengthOfLongestSubstring2 = (s) => {
    const charSet = new Set();
    let rightIndex = -1;
    let result = 0;

    // i is the left bound;
    for (let i = 0; i < s.length; i++) {
        if (i != 0) {
            charSet.delete(s[i - 1]);
        }
        // rightIndex is the right bound
        while(rightIndex + 1 < s.length && !charSet.has(s[rightIndex+1])) {
            charSet.add(s[rightIndex+1]);
            rightIndex++;
        }
        result = Math.max(result, rightIndex - i + 1);
    }

    return result;
}
