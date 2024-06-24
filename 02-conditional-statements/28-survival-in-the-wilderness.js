function makeDecision(time, env, item) {
    if (time == 'day') {
        if (env == 'forest') {
            if (item == 'knife') {
                console.log('Hunt for food');
            } else if (item == 'container') {
                console.log('Collect berries');
            } else {
                console.log('Explore');
            }
        }

        if (env == 'desert') {
            if (item == 'hat') {
                console.log('Search for water');
            } else {
                console.log('Find shade');
            }
        }
    }

    if (time == 'night') {
        if (env == 'forest') {
            if (item == 'firestarter') {
                console.log('Make a campfire');
            } else {
                console.log('Climb on a tree');
            }
        }

        if (env == 'desert') {
            if (item == 'blanket') {
                console.log('Sleep');
            } else {
                console.log('Keep moving to stay warm');
            }
        }
    }
}

makeDecision('day', 'forest', 'knife');
makeDecision('day', 'forest', 'container');
makeDecision('night', 'forest', 'firestarter');
makeDecision('day', 'forest', 'bag');
makeDecision('night', 'desert', 'blanket');
makeDecision('day', 'desert', 'hat');
makeDecision('night', 'desert', 'sword');
makeDecision('night', 'forest', 'hat');
