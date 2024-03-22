async function createDelay(message, delayPeriod) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(message);
        }, delayPeriod);
    });
}

//not in this part of task, but it is good practice to always write try-catch block
async function exampleFunction() {
    const message1 = await createDelay('birinci mesaj consolda log olundu!!', 500);
    console.log(message1);

    const message2 = await createDelay('ikinci mesaj!!', 1000);
    console.log(message2);

    const message3 = await createDelay('ucuncu mesaj!!', 1500);
    console.log(message3);
}


//instead of catch:

async function exampleFunction() {
    try {
        const message1 = await createDelay('birinci mesaj consolda log olundu!!', 500);
        console.log(message1);

        const message2 = await createDelay('ikinci mesaj!!', 1000);
        console.log(message2);

        const message3 = await createDelay('ucuncu mesaj!!', 1500);
        console.log(message3);
    } catch (error) {
        console.log(error);
    }
}




//4

async function createDelay(message, delayTime) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.47) {
                resolve(message);
            } else {
                reject(new Error('Error: Delay failed'));
            }
        }, delayTime);
    });
}

async function exampleFunction() {
    try {
        const message1 = await createDelay('First message', 500);
        console.log(message1);

        const message2 = await createDelay('Second message', 1000);
        console.log(message2);

        const message3 = await createDelay('Third message', 1500);
        console.log(message3);
    } catch (error) {
        console.error(error.message);
    }
}
