const twoSum = (nums, target) => {
    const map = new Map();
    const result = [];

    for (let i = 0; i < nums.length; i++) {
        const secondNum = target - nums[i];

        if (map.has(secondNum)) {
            result.push(map.get(secondNum), i);
        } else {
            map.set(nums[i], i);
        }
    }

    return result;
};