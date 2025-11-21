const rotate = (nums, k) => {
    k = k % nums.length;
    const lastK = nums.splice(nums.length - k, k);
    nums.unshift(...lastK);
};

const reverse = (nums, left, right) => {
    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }
}

const rotate2 = (nums, k) => {
    k = k % nums.length;
    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1);
};
