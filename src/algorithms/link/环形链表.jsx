const hasCycle = (head) => {
    if (head === null || head.next === null) {
        return false;
    }
    
    let slowNode = head, fastNode = head.next;

    while(slowNode !== fastNode) {
        if (fastNode === null || fastNode.next === null) {
            return false;
        }
        slowNode = slowNode.next;
        fastNode = fastNode.next.next;
    }
    
    return true;
}