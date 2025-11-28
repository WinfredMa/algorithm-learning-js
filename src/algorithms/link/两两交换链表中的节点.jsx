const swapPairs = (head) => {
    let curr = head;
    let prev = null;
    let newhead = null;
    if (!curr?.next) {
        return head;
    }

    while (curr?.next) {
        let temp = curr.next.next;
        if (prev) {
            prev.next = curr.next;
        }
        if (!newhead) {
            newhead = curr.next;
        }
        curr.next.next = curr;
        curr.next = temp;
        prev = curr;
        curr = temp;
    }
    
    return newhead
};

const swapPairs2 = (head) => {
    if (head === null || head.next === null) {
        return head;
    }
    const newHead = head.next;
    head.next = swapPairs(newHead.next);
    newHead.next = head;
    return newHead;
};