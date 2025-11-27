const findDuplicate = (nums) => {
    let slow = nums[0];
    let fast = nums[0];
    do {
        slow = nums[slow];
        fast = nums[nums[fast]];
    } while( slow !== fast)

    slow = nums[0];

    while(slow !== fast) {
        slow = nums[slow];
        fast = nums[fast];
    }

    return slow
};

const findDuplicate2 = (nums) => {
    let left = 1;
    let right = nums.length - 1;
    
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        let count = 0;
        
        for (let num of nums) {
            if (num <= mid) {
                count++;
            }
        }
        
        if (count > mid) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    
    return left;
}