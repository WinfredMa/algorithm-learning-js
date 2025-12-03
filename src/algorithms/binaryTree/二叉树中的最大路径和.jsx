const maxPathSum = (root) => {
    let maxSum = -Infinity;

    const dfs = (node) => {
        if (!node) {
            return 0;
        }
        const leftGain = Math.max(dfs(node.left), 0);
        const rightGain = Math.max(dfs(node.right), 0);
        const currentGain = node.val + leftGain + rightGain;
        maxSum = Math.max(maxSum, currentGain);

        return Math.max(leftGain, rightGain) + node.val;
    }

    dfs(root);

    return maxSum
};