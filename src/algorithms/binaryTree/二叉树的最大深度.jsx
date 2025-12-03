const maxDepth = (root) => {
    let goThrough = (node) => {
        if (!node) {
            return 0;
        } else {
            const leftHeight = goThrough(node.left);
            const rightHeight = goThrough(node.right);
            return Math.max(leftHeight, rightHeight) + 1;
        }
    }
    
    return goThrough(root);
}

const maxDepth2 = (root) => {
    if (!root) {
        return 0;
    }
    
    const queue = [root];
    let ans = 0;
    
    while (queue.length > 0) {
        const size = queue.length;
        
        for (let i = 0; i < size; i++) {
            const node = queue.shift();
            
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
        ans++;
    }
    
    return ans;
};