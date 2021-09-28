const getJoke = () => {
    fetch("https://geek-jokes.p.rapidapi.com/api?format=json", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "geek-jokes.p.rapidapi.com",
            "x-rapidapi-key": "2d7d6106femsh3e77fc23a6cc3d9p18e9c9jsne58d94392032"
        }
    })
        .then(response => response.json())
        .then(response => {
            // console.log(response.joke);
            document.getElementById("joke").innerText = response.joke;
        })
        .catch(err => {
            console.error(err);
        });
}

document.getElementById("btn").addEventListener("click", getJoke);