const kthSmallest = (root, k) => {
    let vals = [];
    const collectVals = (node) => {
        if (!node) {
            return
        }
        vals.push(node.val);
        collectVals(node.left);
        collectVals(node.right);
    }

    collectVals(root);
    
    return vals.sort((a, b) => a - b)[k -1];
};

const kthSmallest2 = (root, k) => {
    const stack = [];

    while (root !== null || stack.length) {
        while (root !== null) {
            stack.push(root);
            root = root.left
        }
        root = stack.pop();
        k--;
        if (k === 0) {
            break;
        }
        root = root.right;
    }

    return root.val;
};