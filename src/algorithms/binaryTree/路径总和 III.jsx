const pathSum = (root, targetSum) => {
    if (root === null) {
        return 0;
    }

    let result = rootSum(root, targetSum);
    result += pathSum(root.left, targetSum);
    result += pathSum(root.right, targetSum);

    return result;
};

const rootSum = (root, targetSum) => {
    let result = 0;

    if (root === null) {
        return 0;
    }

    const val = root.val;

    if (val === targetSum) {
        result ++;
    }

    result += rootSum(root.left, targetSum - val);
    result += rootSum(root.right, targetSum - val);

    return result;
}



const pathSum2 = function(root, targetSum) {
    const prefix = new Map();
    prefix.set(0, 1);
    return dfs(root, prefix, 0, targetSum);
}

const dfs = (root, prefix, sum, targetSum) => {
    if (!root) {
        return 0;
    }
    sum += root.val;
    let res = prefix.get(sum - targetSum) || 0;
    prefix.set(sum, (prefix.get(sum) || 0) + 1);
    res += dfs(root.left, prefix, sum, targetSum);
    res += dfs(root.right, prefix, sum, targetSum);
    prefix.set(sum, prefix.get(sum) - 1);
    return res;
}
