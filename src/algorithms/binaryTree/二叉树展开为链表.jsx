const flatten = (root) => {
    const preorderTraversal = (root, list) => {
        if (root) {
          list.push(root);
          preorderTraversal(root.left, list);
          preorderTraversal(root.right, list);
        }
    }

    const list = [];
    preorderTraversal(root, list);
    const totalNodes = list.length;

    for (let i = 1; i < totalNodes; i++) {
        list[i -1].left = null;
        list[i -1].right = list[i];
    }
};

const flatten2 = (root) => {
    if (root === null) {
        return;
    }
    const stack = [];
    stack.push(root);
    let prev = null;
    while (stack.length) {
        const curr = stack.pop();
        if (prev !== null) {
            prev.left = null;
            prev.right = curr;
        }
        const left = curr.left, right = curr.right;
        if (right !== null) {
            stack.push(right);
        }
        if (left !== null) {
            stack.push(left);
        }
        prev = curr;
    }
};