function drawSymbolicColsBox(num) {
    let result = ''
    let count = 1

    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
            if (count % 3 === 0) {
                result += '* ';
            } else if (count % 2 === 0) {
                result += '$ ';
            } else if (count % 2 === 1) {
                result += '@ ';
            }
            count++;
        }
        result += '\n'
    }
    console.log(result)

}

drawSymbolicColsBox(3);
drawSymbolicColsBox(5);
// drawSymbolicColsBox(1);
