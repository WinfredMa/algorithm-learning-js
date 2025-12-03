const buildTree = (preorder, inorder) => {
    const inorderMap = new Map();

    for(let i = 0; i < inorder.length; i++) {
        inorderMap.set(inorder[i], i);
    }

    const build = (preStart, preEnd, inorderStart, inorderEnd) => {
        if (preStart > preEnd) {
            return null;
        }

        const rootVal = preorder[preStart];
        const rootIndex = inorderMap.get(rootVal);
        const root = new TreeNode(rootVal);
        const leftSize = rootIndex - inorderStart;

        root.left = build(preStart + 1, preStart + leftSize, inorderStart, rootIndex -1);
        root.right = build(preStart + leftSize + 1, preEnd, rootIndex + 1, inorderEnd);

        return root;
    }
    
    return build(0, preorder.length - 1, 0, inorder.length - 1);
};

const buildTree2 = (preorder, inorder) => {
    const inorderMap = new Map();
    for (let i = 0; i < inorder.length; i++) {
        inorderMap.set(inorder[i], i);
    }
    let preRootIndex = 0;

    const build = (inorderStar, inorderEnd) => {
        if (inorderStar > inorderEnd) {
            return null;
        }
        const node = new TreeNode(preorder[preRootIndex]);
        const inorderRootIndex = inorderMap.get(preorder[preRootIndex]);
        preRootIndex++
        node.left = build(inorderStar, inorderRootIndex - 1);
        node.right = build(inorderRootIndex + 1, inorderEnd);
        return node;
    }

    return build(0, inorder.length -1)
};