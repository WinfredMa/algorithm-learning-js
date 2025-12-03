const diameterOfBinaryTree = (root) => {
    let result = 0;
    const getDepth = (node) => {
        if (!node) {
            return 0;
        }
        let leftDepth = getDepth(node.left);
        let rightDepth = getDepth(node.right);
        result = Math.max(result, leftDepth + rightDepth);
        return Math.max(leftDepth, rightDepth) + 1;
    };
    getDepth(root);
    
    return result;
};