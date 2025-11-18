const longestConsecutive = (nums) => {
    const uniqNums = new Set(nums);
    let result = 0;
    let maxLength = 0;
    for (let item of uniqNums) {
        if (!uniqNums.has(item - 1)) {
            maxLength = 1;
            currNum = item;

            while(uniqNums.has(currNum + 1)) {
                currNum++;
                maxLength++;
            }
            result = Math.max(result, maxLength);
        }
    }
    
    return result;
};