const minWindow = (s, t) => {
    if (s.length === 0 || t.length === 0) {
        return "";
    }
    const referMap = new Map();
    const windowMap = new Map();
    let left = 0, right = 0, start = 0, formed = 0,minLength = Infinity; 

    for (let char of t) {
        referMap.set(char, (referMap.get(char) || 0) + 1);
    }

    while (right < s.length) {
        let char = s[right];
        windowMap.set(char, (windowMap.get(char) || 0) + 1);
        if (referMap.has(char) && referMap.get(char) === windowMap.get(char)) {
            formed++
        }

        while(formed === referMap.size) {
            if (right - left + 1< minLength) {
                start = left;
                minLength = right - left + 1;
            }
            const leftChar = s[left];
            if (windowMap.get(leftChar) === referMap.get(leftChar)) {
                formed--
            }
            windowMap.set(leftChar, windowMap.get(leftChar) - 1);
            left++;
        }

        right++;
    }

    return minLength === Infinity ? "" : s.substring(start, start + minLength);
};