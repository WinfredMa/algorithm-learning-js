const mergeTwoLists = (list1, list2) => {
    if (!list1 || !list2) {
        return list1 || list2;
    }
    let dummy = new ListNode(0, null);
    let current = dummy;
    while (list1 && list2) {
        if (list1.val > list2.val) {
            let temp = new ListNode(list2.val);
            current.next = temp;
            current = temp;
            list2 = list2.next;
        } else {
            let temp = new ListNode(list1.val);
            current.next = temp;
            current = temp;
            list1 = list1.next;
        }
    }
    if (list1) {
        current.next = list1;
    } else {
        current.next = list2;
    }
    
    return dummy.next
};
const mergeTwoLists2 = (list1, list2) => {
    if (list1 === null) {
        return list2;
    } else if (list2 === null) {
        return list1;
    } else if (list1.val < list2.val) {
        list1.next = mergeTwoLists2(list1.next, list2);
        return list1;
    } else {
        list2.next = mergeTwoLists2(list1, list2.next);
        return list2;
    }
};

const mergeTwoLists3 = (list1, list2) => {
    const prehead = new ListNode(-1);
    let prev = prehead;

    while (list1 && list2) {
        if (list1.val <= list2.val) {
            prev.next = list1;
            list1 = list1.next;
        } else {
            prev.next = list2;
            list2 = list2.next;
        }
        prev = prev.next;
    }
    prev.next = list1 === null ? list2 : list1;
    
    return prehead.next;
};