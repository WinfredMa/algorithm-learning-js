const searchMatrix = (matrix, target) => {
    let m = matrix.length;
    let n = matrix[0].length;

    for (let i = 0; i < m; i++) {
        if(target> matrix[i][n -1]) {
            continue;
        } else {
            let left = 0; right = n -1;
            while (left <= right) {
                let mid = Math.floor((left + right)/2);
                if (target == matrix[i][mid]) {
                    return true;
                }
                if (target < matrix[i][mid]) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            }
        }
    }

    return false;
};

const searchMatrix2 = (matrix, target) => {
    const m = matrix.length, n = matrix[0].length;
    let x = 0, y = n - 1;
    while (x < m && y >= 0) {
        if (matrix[x][y] === target) {
            return true;
        }
        if (matrix[x][y] > target) {
            --y;
        } else {
            ++x;
        }
    }
    
    return false;
};
