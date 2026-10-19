const axios = require ("axios");

async function getUserWithError() {
    try {
        const response = await axios.get(
            'https://jsonplaceholder.typicode.com/wrong-url'
           
        );
        console.log (response.status);
        return response.data;
       
        
    } catch (error) {
        console.log("Request failed" );
        return 'Request failed';
    }
    
}

test('should handle request error', async () => {
    const result = await getUserWithError();

    expect(result).toBe('Request failed');
});
