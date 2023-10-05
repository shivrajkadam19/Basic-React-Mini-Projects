const promiseOne = new Promise((resolve, reject) => {
    let a = false
    if (!a)
        resolve(a)
    else
        reject("error")
})

promiseOne.then((a) => console.log(a)).catch((err) => console.log(err))

fetch("https://api.github.com/users/shivrajkadam19").then((Response) => {
    return Response.json()
}).then((data) => {
    console.log(data.login);
}).catch((err) => {
    console.log(err);
}).finally(() => {
    console.log("here");
})



async function getAllUsers() {
    try {
        const response = await fetch('https://api.github.com/users/adityabharti83')
        const data = await response.json()
        console.log(data.login);
    } catch (error) {
        console.log("E: ", error);
    }
}

getAllUsers()