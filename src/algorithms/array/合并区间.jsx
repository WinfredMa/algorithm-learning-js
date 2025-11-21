const merge = (intervals) => {
    intervals.sort((a, b) => a[0] - b[0]);
    const result = [intervals[0]];

    for(let i = 1; i < intervals.length; i++) {
        const temp = result.pop();

        if (intervals[i][0] <= temp[1]) {
            let left = temp[0];
            let right = Math.max(intervals[i][1], temp[1]);
            result.push([left, right]);
        } else {
            result.push(temp);
            result.push(intervals[i]);
        }
    }

    return result
};
