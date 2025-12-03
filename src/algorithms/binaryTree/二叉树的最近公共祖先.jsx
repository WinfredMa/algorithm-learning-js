const lowestCommonAncestor = (root, p, q) => {
    if (!root || root === p || root === q) {
        return root;
    }
    const leftChild = lowestCommonAncestor(root.left, p, q);
    const rightChild = lowestCommonAncestor(root.right, p, q);

    if (leftChild && rightChild) {
        return root;
    }

    return leftChild || rightChild;
}

const lowestCommonAncestor2 = (root, p, q) => {
    let parentMap = new Map();
    let visitedVal = new Set();

    const dfs = (root) => {
        if (root.left !== null) {
            parentMap.set(root.left.val, root);
            dfs(root.left);
        }

        if (root.right !== null) {
            parentMap.set(root.right.val, root);
            dfs(root.right);
        }
    }
    dfs(root);

    while (p) {
        visitedVal.add(p.val);
        p = parentMap.get(p.val);
    }

    while (q) {
        if (visitedVal.has(q.val)) {
            return q;
        }
        q = parentMap.get(q.val);
    }

    return null;
};

const lowestCommonAncestor3 = (root, p, q) => {
    const findPath = (node, target, path) => {
        if (!node) {
            return false;
        }
        path.push(node);
        
        if (node === target) {
            return true;
        }
        
        if (findPath(node.left, target, path)) {
            return true;
        }
        
        if (findPath(node.right, target, path)) {
            return true;
        }
        
        path.pop(); //This is very important. backtrack.
        return false;
    };
    
    const pathP = [];
    const pathQ = [];
    
    findPath(root, p, pathP);
    findPath(root, q, pathQ);
    
    let lca = null;
    const len = Math.min(pathP.length, pathQ.length);
    
    for (let i = 0; i < len; i++) {
        if (pathP[i] === pathQ[i]) {
            lca = pathP[i];
        } else {
            break;
        }
    }
    
    return lca;
};