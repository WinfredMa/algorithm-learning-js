const isValidBST = (root) => {
    const check = (node, min, max) => {
        if (!node) {
            return true;
        }

        if (min >= node.val || max <= node.val) {
            return false;
        }

        return check(node.left, min, node.val) && check(node.right, node.val, max);
    }
    
    return check(root, -Infinity, Infinity);
};