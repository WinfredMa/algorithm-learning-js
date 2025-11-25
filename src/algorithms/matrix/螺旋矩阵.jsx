const spiralOrder = (matrix) => {
    let result = [];
    let flag = 0;

    while (matrix.length) {
        switch(flag % 4) {
            case 0: result.push(...matrix.shift());
            break;
            case 1: for( let i = 0; i < matrix.length; i++) {
                result.push(...matrix[i].splice(matrix[i].length - 1, 1));
            }
            break;
            case 2: result.push(...matrix.pop().reverse());
            break;
            case 3: for (let j = matrix.length - 1; j >=0; j--) {
                result.push(...matrix[j].splice(0, 1));
            }
            break;

        }
        flag++;
    }
    
    return result;
};

const spiralOrder2 = (matrix) => {
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
        return [];
    }
    
    const m = matrix.length;
    const n = matrix[0].length;
    let top = 0, bottom = m - 1, left = 0, right = n - 1;
    const result = [];
    
    while (top <= bottom && left <= right) {
        for (let col = left; col <= right; col++) {
            result.push(matrix[top][col]);
        }
        top++;
        
        for (let row = top; row <= bottom; row++) {
            result.push(matrix[row][right]);
        }
        right--;
        
        if (top <= bottom) {
            for (let col = right; col >= left; col--) {
                result.push(matrix[bottom][col]);
            }
            bottom--;
        }
        
        if (left <= right) {
            for (let row = bottom; row >= top; row--) {
                result.push(matrix[row][left]);
            }
            left++;
        }
    }
    
    return result;
}