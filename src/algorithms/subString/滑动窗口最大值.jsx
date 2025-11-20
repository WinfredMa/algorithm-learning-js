const maxSlidingWindow = (nums, k) => {
    let result = [];
    const queue = [];
    
    for (let i = 0; i < nums.length; i++) {
        while (queue.length && nums[i] >= nums[queue[queue.length -1]]) {
            queue.pop();
        }
        queue.push(i);

        if (queue[0] <= i - k) {
            queue.shift();
        }

        if (i >= k -1) {
            result.push(nums[queue[0]])
        }
    }
    return result;    
};