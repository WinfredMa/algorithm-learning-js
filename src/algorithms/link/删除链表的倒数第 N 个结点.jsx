const removeNthFromEnd = (head, n) => {
    let dummy = new ListNode(0, head), fastNode = head,slowNode = dummy;

    while (fastNode !== null) {
        if (n <=0 ) {
            slowNode = slowNode.next;
        }
        n--;
        fastNode = fastNode.next;
    }
    slowNode.next = slowNode.next.next;
    return dummy.next;
};
