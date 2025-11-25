const addTwoNumbers = (l1, l2) => {
    let carry = 0;
    let dummy = new ListNode(0, null);
    let current = dummy;
    
    while (l1 || l2) {
        let val1 = l1?.val ? l1.val : 0;
        let val2 = l2?.val ? l2.val : 0;
        let val = (val1 + val2 + carry) % 10;
        current.next = new ListNode(val, null);
        carry = Math.floor((val1 + val2 + carry) / 10);
        current =  current.next;
        l1 = l1?.next;
        l2 = l2?.next;
    }
    if (carry) {
        current.next = new ListNode(carry, null);
    }
    return dummy.next;
};