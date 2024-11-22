const userList = document.getElementById("user-list");

document.addEventListener("DOMContentLoaded", async () => {
    // This function should GET the first page of users from reqres.in.
    // The users should be displayed in the user-list element.
    // Each user should be in a new <div> with the user's first name, last name, and profile image.
    // The format should follow the example user in the HTML file.
    let request = await fetch("https://reqres.in/api/users");
    let result = await request.json();
    console.log(result);
    for (let i = 0; i < result.data.length; i++) {
        let card = document.createElement("div");
        card.classList.add("card");
        let header = document.createElement("h2");
        header.textContent = result.data[i].first_name + " " + result.data[i].last_name;
        card.appendChild(header);
        let image = document.createElement("img");
        image.alt = result.data[i].first_name + " " + result.data[i].last_name;
        image.src = result.data[i].avatar;
        card.append(image);
        userList.appendChild(card);
    }
    // TODO
});
