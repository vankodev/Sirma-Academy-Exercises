function address(age, gender) {
    if (gender === 'f') {
        if (age <= 16) {
            console.log('Miss');
        } else {
            console.log('Ms.');
        }
    } 
    
    if (gender === 'm') {
        if (age <= 16) {
            console.log('Master');
        } else {
            console.log('Mr.');
        }
    }
}

address(14, 'f');
address(17, 'm');
address(10, 'm');
address(32, 'f');
