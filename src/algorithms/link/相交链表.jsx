const getIntersectionNode = (headA, headB) => {
    const visited = new Set();
    let tempNode = headA;
    while (tempNode) {
        visited.add(tempNode);
        tempNode = tempNode.next;
    }

    tempNode = headB;
    while (tempNode) {
        if (visited.has(tempNode)) {
            return tempNode;
        }
        tempNode = tempNode.next;
    }

    return null;
};
const getIntersectionNode2 = (headA, headB) =>{
    if (!headA || !headB) {
        return null;
    }
    
    let ptrA = headA;
    let ptrB = headB;
    
    while (ptrA !== ptrB) {
        ptrA = ptrA ? ptrA.next : headB;
        ptrB = ptrB ? ptrB.next : headA;
    }
    
    return ptrA;
};