function newBuilding(floors, rooms) {
    // iterate over floors
    for (let i = floors; i > 0; i--) {
        const floorNumber = i;
        const isOddFloor = floorNumber % 2 == 0;
        const isLastFloor = floorNumber == floors;
        let floor = '';
        let roomType = '';

        // define room type
        if (isLastFloor) {
            roomType = 'L';
        } else if (isOddFloor) {
            roomType = 'O';
        } else {
            roomType = 'A';
        }

        // iterate over rooms
        for (let j = 0; j < rooms; j++) {
            const roomNumber = j;
            floor = floor + ' ' + roomType + floorNumber + roomNumber;
        }

        console.log(floor);
    }
}

newBuilding(6, 4);
// newBuilding(3, 3);
// newBuilding(4, 4);
