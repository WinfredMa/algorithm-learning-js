const sortList = (head) => {
    let prev = null, slow = head, fast = head;
    const merge = (link1, link2) => {
        let dummy = new ListNode(0, null);
        let curr = dummy;
        while (link1 && link2) {
            if (link1.val >= link2.val) {
                curr.next = link2;
                link2 = link2.next;
            } else {
                curr.next = link1;
                link1 = link1.next;
            }
            curr = curr.next;
        }

        curr.next = link1 || link2;

        return dummy.next;
    }

    if (!head || !head.next) {
        return head;
    }

    while (fast && fast.next) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }

    prev.next = null;

    return merge(sortList(head), sortList(slow))
};

const sortList2 = (head) => {
    const mergeLink = (link1, link2) => {
        const dummy = new ListNode(0);
        let current = dummy

        while(link1 !== null && link2 !== null) {
            if (link1.val <= link2.val) {
                current.next = link1;
                link1 = link1.next;
            } else {
                current.next = link2;
                link2 = link2.next;
            }
            current = current.next;
        }
        current.next = link1 || link2;

        return dummy.next;
    }

    const toSortList = (head, tail) => {
        if (head === null) {
            return head;
        }
        if (head.next === tail) {
            head.next = null;
            return head;
        }

        let slow = head, fast = head;
        while (fast !== tail) {
            slow = slow.next;
            fast = fast.next;

            if (fast !== tail) {
                fast = fast.next;
            }
        }
        const mid = slow;
        return mergeLink(toSortList(head, mid), toSortList(mid, tail));
    };
    
    return toSortList(head, null);
}