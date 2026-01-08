
async function makeRequest() {
    const response = await fetch('http://localhost:3000/', {
        method: 'POST',
        headers: {
            'Content-Type': 'text/plain',
        },
        body: 'Hello, this is a test',
    });

    const data = await response.text();
    console.log('Response:', data);
}

makeRequest();