const inorderTraversal = (root) => {
    const result = [];
    const goThrough = (node) => {
        if (!node) {
            return;
        }
        goThrough(node.left);
        result.push(node.val);
        goThrough(node.right);
    }
    goThrough(root)

    return result;
};

const inorderTraversal2 = (root) => {
    const result = [];
    const stack = [];
    while (root || stack.length) {
        while (root) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        result.push(root.val);
        root = root.right;
    }
    
    return result;
};