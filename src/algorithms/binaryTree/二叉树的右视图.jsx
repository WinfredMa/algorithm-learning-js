const rightSideView = (root) => {
    let result = [];
    let queue = [];
    if (!root) {
        return result;
    }
    queue=[root];
    
    while(queue.length) {
        const items = queue.length;//This is key item.
        for (let i = 0; i < items; i++) {
            let node = queue.shift();
            if (i == items - 1) {
                // get the right most node
                result.push(node.val);
            }
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
    }
    
    return result;
};