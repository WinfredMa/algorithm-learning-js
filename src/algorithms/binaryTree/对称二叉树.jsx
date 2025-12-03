const isSymmetric = (root) => {
    if (!root) {
        return true;
    }
    return recur(root.left, root.right);
    function recur(left, right) {
        if (!left && !right) {
            return true;
        }
        if (!left || !right || left.val !== right.val) {
            return false;
        }
        return recur(left.left, right.right) && recur(left.right, right.left);
    }
}

const isSymmetric2 = (root) => {
    if (!root) {
        return true;
    }
    
    const queue = [root.left, root.right];
    while (queue.length) {
        const left = queue.shift();
        const right = queue.shift();
        if (!left && !right) {
            continue;
        }
        if (!left || !right || left.val !== right.val) {
            return false;
        }
        queue.push(left.left, right.right);
        queue.push(left.right, right.left);
    }
    
    return true;
}