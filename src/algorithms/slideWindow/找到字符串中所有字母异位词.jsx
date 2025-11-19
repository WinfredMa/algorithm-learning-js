const findAnagrams = (s, p) => {
    const patternCharCount = new Array(26).fill(0);
    const strCharCount = new Array(26).fill(0);
    const result = [];
    if (s.length < p.length) {
        return result;
    }
    for( let i = 0; i < p.length; i++) {
        patternCharCount[p[i].charCodeAt() - 'a'.charCodeAt()] ++;
        strCharCount[s[i].charCodeAt() - 'a'.charCodeAt()] ++;
    }
    if (patternCharCount.toString() === strCharCount.toString()) {
        result.push(0)
    }

    for(let i = 0; i < s.length - p.length ; i++) {
        strCharCount[s[i].charCodeAt() - 'a'.charCodeAt()]--;
        strCharCount[s[i + p.length].charCodeAt() - 'a'.charCodeAt()]++;
        
        if (strCharCount.toString() === patternCharCount.toString()) {
            result.push(i + 1)
        }
    }
    
    return result;
};
