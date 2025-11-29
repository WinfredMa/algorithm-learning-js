const mergeKLists = (lists) => {
    let dummy = new ListNode(0)
    let link1 = lists[0];
    let curr = dummy;
    if (lists.length === 1) {
        return lists[0];
    }
    
    for (let i = 1; i < lists.length; i++) {
        let link2 = lists[i];
        while (link1 && link2) {
            if (link1.val > link2.val) {
                curr.next = link2;
                link2 = link2.next;
            } else {
                curr.next = link1;
                link1 = link1.next;
            }
            curr = curr.next;
        }
        curr.next = link1 || link2;

        link1 = dummy.next;
        curr = dummy;
    }

    return dummy.next;
};