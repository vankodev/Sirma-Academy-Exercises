function calculateFace(figure, a, b) {
    let face = 0;

    switch (figure) {
        case 'square':
            face = a * a;
            break;

        case 'rectangle':
            face = a * b;
            break;

        case 'triangle':
            face = (a * b) / 2;
            break;

        case 'circle':
            face = Math.PI * Math.pow(a, 2);
            break;
    }

    console.log(face.toFixed(2));
}

calculateFace('square', 5);
calculateFace('rectangle', 10, 3.5);
calculateFace('triangle', 4.5, 20);
calculateFace('circle', 10);
