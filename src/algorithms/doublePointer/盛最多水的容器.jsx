const maxArea = (height) => {
    let max = 0;

    let left = 0; 
    let right = height.length - 1;

    while( left < right) {
        const area = Math.min(height[left], height[right]) * (right - left);
        max = Math.max(max, area);
        if (height[left] <= height[right]) {
            left++
        } else if (height[left] > height[right]) {
            right --;
        }
    }
    return max
};