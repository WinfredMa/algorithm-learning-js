const copyRandomList = (head) => {
    if (!head) {
        return null;
    }
    
    const map = new Map();
    let current = head;
    
    while (current) {
        map.set(current, new Node(current.val));
        current = current.next;
    }
    
    current = head;
    while (current) {
        // Key logics
        const newNode = map.get(current);
        newNode.next = map.get(current.next) || null;
        newNode.random = map.get(current.random) || null;
        current = current.next;
    }
    
    return map.get(head);
};