const hasCycle = (head) => {
    let slowNode = head, fastNode = head;

    if (head === null || head.next === null) {
        return false;
    }

    while(fastNode && fastNode.next) {
        slowNode = slowNode.next;
        fastNode = fastNode.next.next;
        if (fastNode === slowNode) {
            return true;
        }
    }
    
    return false;
}