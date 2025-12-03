const levelOrder = (root) => {
    let result = [];

    if (!root) {
        return result;
    }
    const queue = [root]
    while (queue.length) {
        const nodesAtLevel = queue.length;
        result.push([]);
        for (let i = 0; i < nodesAtLevel; i++) {
            const node = queue.shift();
            result[result.length -1].push(node.val);
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