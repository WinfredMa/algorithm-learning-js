const setZeroes = (matrix) => {
    let m = matrix.length;
    let n = matrix[0].length;
    const rows = new Array(m).fill(false);
    const cols = new Array(n).fill(false);
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] == 0) {
                rows[i] = cols[j] = true;
            }
        }
    }
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (rows[i] || cols[j]) {
                matrix[i][j] = 0;
            }
        }
    }
};

const setZeroes2 = (matrix) => {
    const m = matrix.length;
    const n = matrix[0].length;
    const ignoreRows = [];
    const ignoreCols = []
    for (let i = 0; i< m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 0) {
                ignoreRows.push(i);
                ignoreCols.push(j);
            }
        }
    }
    for (let l = 0; l < ignoreRows.length; l++) {
        for (let k = 0; k < n; k++) {
            matrix[ignoreRows[l]][k] = 0;
        }
    }

    for (let l = 0; l < ignoreCols.length; l++) {
        for (let k = 0; k < m; k++) {
            matrix[k][ignoreCols[l]] = 0;
        }
    }
};