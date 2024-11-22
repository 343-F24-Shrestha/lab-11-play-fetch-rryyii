const output1 = document.getElementById('output-1');
const output2 = document.getElementById('output-2');

document.getElementById('api-1-btn').addEventListener('click', async () => {
    const response = await fetch('https://www.theaudiodb.com/api/v1/json/2/album.php?i=112024');
    const data = await response.json();
    output1.textContent = JSON.stringify(data, null, 2);
});


document.getElementById('api-2-btn').addEventListener('click', async () => {
    const key = '19a0219f7af2d64ef945a24702924a8b';
    const user = 'gaesekki';
    const response = await fetch(
        `https://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=${user}&api_key=${key}&format=json`,
        {
            method: 'GET',
        }
    );
    const data = await response.json();
    output2.textContent = JSON.stringify(data, null, 2);
});
