const sortedArrayToBST = (nums) => {
    const assistFunc = (nums, leftIndex, rightIndex) => {
        if (leftIndex > rightIndex) {
            return null;
        }
        const midIndex = Math.floor((leftIndex + rightIndex) / 2);
        const root = new TreeNode(nums[midIndex], null, null);
        root.left = assistFunc(nums, leftIndex, midIndex -1);
        root.right = assistFunc(nums, midIndex + 1, rightIndex);
        return root;
    }

    return assistFunc(nums, 0, nums.length -1);
};