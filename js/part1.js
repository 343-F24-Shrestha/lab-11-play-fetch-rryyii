const output = document.getElementById("output");

document.getElementById("get-btn").addEventListener("click", async () => {
    // This function should send a GET request to the echo endpoint and output the result
    // The two input fields should be included in the request URL as **query parameters**
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const output = document.getElementById("output"); 
    let request = await fetch("https://echo.zuplo.io/api?name=" + name + "&age=" + age);
    let result = await request.json();
    output.textContent = JSON.stringify(result, null, 2);
});

document.getElementById("post-json-btn").addEventListener("click", async () => {
    // This function should send a POST request to the echo endpoint with the input data as JSON
    // The two input fields should be included in the request body as **JSON data**
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const output = document.getElementById("output"); 
    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify( {name: name, age: age}),
    };
    let request = await fetch("https://echo.zuplo.io/api", options);
    let result = await request.json();
    output.textContent = JSON.stringify(result, null, 2);
    // TODO
});

document.getElementById("post-form-btn").addEventListener("click", async () => {
    // This function should send a POST request to the echo endpoint with the input data as form data
    // The two input fields should be included in the request body as **url-encoded data**
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const output = document.getElementById("output"); 
    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: new URLSearchParams( {name: name, age: age}),
    };
    let request = await fetch("https://echo.zuplo.io/api", options);
    let result = await request.json();
    output.textContent = JSON.stringify(result, null, 2);
    // TODO
});
