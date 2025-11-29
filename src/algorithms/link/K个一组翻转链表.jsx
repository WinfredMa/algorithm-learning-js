const reverseKGroup = (head, k) => {
    const reverseSubLink = (head, tail) => {
        let previousNext = tail.next;
        let p = head;
        while (previousNext !== tail) {
            const next = p.next;
            p.next = previousNext;
            previousNext = p;
            p = next;
        }
        return [tail, head];
    }
    const dummy = new ListNode(0, head);
    let pre = dummy;

    while (head) {
        let tail = pre;
        for (let i = 0; i < k; i++) {
            tail = tail.next;
            if (!tail) {
                return dummy.next;
            }
        }

        [head, tail] = reverseSubLink(head, tail);
        pre.next = head;
        pre = tail;
        head = tail.next;
    }
    return dummy.next;
};

