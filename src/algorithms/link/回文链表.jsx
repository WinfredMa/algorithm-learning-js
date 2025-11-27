const isPalindrome = (head) => {
    let vals = [];
    while(head) {
        vals.push(head.val);
        head = head.next;
    }

    let left = 0, right = vals.length - 1;

    while (left < right) {
        if (vals[left] !== vals[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
};