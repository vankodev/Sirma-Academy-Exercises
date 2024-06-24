function addAndRemove(arr) {
    let newArr = [];
    let currNum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'add') {
            currNum++;
            newArr.push(currNum);
        } else if (arr[i] === 'remove') {
            newArr.pop();
        }
    }

    if (newArr.length) {
        console.log(newArr.join(' '));
    } else {
        console.log('Empty');
    }
}

addAndRemove(['add', 'add', 'add', 'add']);
addAndRemove(['add', 'add', 'remove', 'add', 'add']);
addAndRemove(['remove', 'remove', 'remove']);
