const invertTree = (root) => {
    const goThrough = (node) => {
        if (!node) {
            return node;
        }
        let leftNode = node.left;
        let rightNode = node.right;
        node.left = rightNode;
        node.right = leftNode;
        if (leftNode) {
            goThrough(leftNode);
        }
        if (rightNode) {
            goThrough(rightNode);
        }
    }
    goThrough(root);
    
    return root;
};