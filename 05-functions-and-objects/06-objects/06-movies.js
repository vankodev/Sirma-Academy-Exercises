function printMoviesInfo(input) {
    let movies = [];

    for (const commandLine of input) {
        if (commandLine.includes('addMovie')) {
            const movieInfo = commandLine.split('addMovie ');
            const movieName = movieInfo[1];

            movies.push({ name: movieName });
        } else if (commandLine.includes(' directedBy ')) {
            const movieInfo = commandLine.split(' directedBy ');
            const movieName = movieInfo[0];
            const movieDirector = movieInfo[1];

            let movie = movies.find((movie) => movie.name === movieName);

            if (movie) {
                movie.director = movieDirector;
            }
        } else if (commandLine.includes(' onDate ')) {
            const movieInfo = commandLine.split(' onDate ');
            const movieName = movieInfo[0];
            const movieDate = movieInfo[1];

            let movie = movies.find((movie) => movie.name === movieName);

            if (movie) {
                movie.date = movieDate;
            }
        }
    }

    const fullMoviesInfo = movies.filter(
        (movie) => movie.name && movie.director && movie.date
    );

    for (const movie of fullMoviesInfo) {
        let movieJSON = JSON.stringify(movie);
        console.log(movieJSON);
    }
}

printMoviesInfo([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Spinderman 2 onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen',
]);

console.log('------------------');

printMoviesInfo([
    'addMovie The Avengers',
    'addMovie Spiderman',
    'The Avengers directedBy Pesho Peshov',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo',
    'The Avengers directedBy Anthony Russo',
]);
