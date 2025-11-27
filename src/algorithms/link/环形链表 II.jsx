const detectCycle = (head) => {
    let result = null;
    let slowNode = head, fastNode = head;

    while (fastNode && fastNode.next) {
        slowNode = slowNode.next;
        fastNode = fastNode.next.next;

        if (fastNode === slowNode) {
            slowNode = head;
            while (slowNode !== fastNode) {
                slowNode = slowNode.next;
                fastNode = fastNode.next;
            }

            return slowNode;
        }
    }
    
    return result;
};