const easyClick = () => {
    const [numbers, operations] = generateNumbers(7);
    console.log(numbers);
    console.log(operations);
}

const mediumClick = () => {
    const [numbers, operations] = generateNumbers(12);
    console.log(numbers);
    console.log(operations);
}

const hardClick = () => {
    const [numbers, operations] = generateNumbers(16);
    console.log(numbers);
    console.log(operations);
}

const impossibleClick = () => {
    const [numbers, operations] = generateNumbers(25);
    console.log(numbers);
    console.log(operations);
}

const generateNumbers = (difficulty) => {
    // alert(difficulty);
    let numbers = [];
    let operations = [];
    let amountOfNumbers = Math.floor(Math.random() * difficulty) + 3;
    for (let i = 0; i < amountOfNumbers; i++) {
        numbers.push(Math.floor(Math.random() * 10 * difficulty) + 1);
        let rand;
        switch (difficulty) {
            case 7:
                rand = Math.floor(Math.random() * 2);
                if (rand === 0) operations.push("+");
                else operations.push("-");
                break;
            case 12:
                rand = Math.floor(Math.random() * 4);
                if (rand === 0) operations.push("+");
                else if (rand === 1) operations.push("-");
                else if (rand === 2) operations.push("*");
                else operations.push("/");
                break;
            case 16:
                rand = Math.floor(Math.random() * 5);
                if (rand === 0) operations.push("+");
                else if (rand === 1) operations.push("-");
                else if (rand === 2) operations.push("*");
                else if (rand === 3) operations.push("/");
                else operations.push("^");
                break;
            case 25:
                rand = Math.floor(Math.random() * 6);
                if (rand === 0) operations.push("+");
                else if (rand === 1) operations.push("-");
                else if (rand === 2) operations.push("*");
                else if (rand === 3) operations.push("/");
                else if (rand === 4) operations.push("^");
                else if (rand === 5) operations.push("%");
                break;
        }
    }
    operations.pop();
    return ([numbers, operations]);
}