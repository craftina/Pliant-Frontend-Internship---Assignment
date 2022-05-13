function bestVelocity(array) {

    if (array.length < 3) {
        //    throw ('error');
        console.log('error');
    } else {
        let sprints = [];

        for (let i = 0; i < array.length - 2; i++) {
            const sprint = [array[i], array[i + 1], array[i + 2]];
            const sprintSum = sprint.reduce((a, b) => a + b, 0);
            sprints.push({ sprint, sprintSum });
        }

        const bestSprint = sprints.sort((a, b) => a.sprintSum - b.sprintSum).pop();

        let result = { sequence: bestSprint.sprint, sum: bestSprint.sprintSum };
        console.log(result);
    }

}


bestVelocity([11, 14, 10, 12]);
bestVelocity([12, 9, 1, 5, 11, 5]);
bestVelocity([76, 80]);
bestVelocity([76, 80, 81, 77, 83, 78, 80]);