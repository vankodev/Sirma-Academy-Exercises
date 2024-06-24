function identifyZone(latitude, hemisphere) {
    if (latitude == 0) {
        console.log('Equator');
    } else if (latitude > -23.5 && latitude < 23.5) {
        console.log('Tropic Zone');
    } else if (latitude > -66.5 && latitude < 66.5) {
        console.log('Temperate Zone');
    } else {
        console.log('Arctic Zone');
    }
}

identifyZone(70, 'N');
identifyZone(45, 'S');
identifyZone(10, 'N');
identifyZone(0, 'N');
identifyZone(-85, 'S');
