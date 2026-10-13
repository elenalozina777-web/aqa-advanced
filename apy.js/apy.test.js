const axios = require ('axios');

describe ('Blok of tests', () => {
    test ('get user id', async () => {
        const response = await axios.get (
            'https://jsonplaceholder.typicode.com/users/2'
        );
        expect  (response.status).toBe(200);
        expect (response.data.id).toBe(2);
       
      
    });
    test ('get all posts', async () => {
        const response = await axios.get (
            'https://jsonplaceholder.typicode.com/posts'
        );
        expect  (response.status).toBe(200);
        expect (response.data).not.toBe('');
        expect(response.data[0]).toHaveProperty('userId');
        expect(response.data[0]).toHaveProperty('id');
        expect(response.data[0]).toHaveProperty('title');
        expect(response.data[0]).toHaveProperty('body');
        
        
    });
    
     test ('get post body', async () => {
        const response = await axios.get (
            'https://jsonplaceholder.typicode.com/posts/3'
        );
        expect  (response.status).toBe(200);
        expect(response.data.body.length).toBeGreaterThan(0);
        expect(typeof response.data.body).toBe('string');
        

    });
    test ('make new user name', async () => {
        const response = await axios.post (
            'https://jsonplaceholder.typicode.com/users',{
                 name : 'Olena',
            }
           
        );
        expect  (response.status).toBe(201);
        expect (response.data.name).toBe('Olena');
        expect (typeof response.data.name).toBe('string');
        console.log(response.data.name);
      

    });
     test ('make new title for posts', async () => {
        const response = await axios.post (
            'https://jsonplaceholder.typicode.com/posts',{
                title : 'Everything is good',
            }
           
        );
        expect  (response.status).toBe(201);
        expect (response.data.title).toBe('Everything is good');
        expect (typeof response.data.title).toBe('string');
        console.log(response.data.title);
      

    });
    
});



