# profile-management-asssignment
Profile management assignment by dhandolat


Steps to setup the app:
1. Download/clone/fork the code
2. Put it in a local folder
3. run 'npm install' inside that folder



Steps to run the app:
1. Open server.js in your vscode/any other.
2. Replace my MongoDB URI with your MongoDB URI
3. Replace my database name with your database name
4. run 'node .\server.js' to start the app
5. You should also run 'mongod' im console to start your server.
6. Also, setup postman and coy the URL "http://localhost:3000/users" for now


The app will now start

I have already seeded the databse with some dataset so you can view the changes easeily, the seeded data's userId being 1, 2, 3, 4 and 5


Steps to use the app
1. In postman, send GET Request to "http://localhost:3000/users/userId" to get information about a particular user. Entering wrong userId will not crash the        server, as the code is sufficiently error handled.
  
2. In postman, send POST Request to "http://localhost:3000/users" to post new user information. Note that you have to send information as JSON. To do that go to      body, select raw from options and from drop down menu select JSON. Look for the proper format for JSON. To avoid typing, here is one samples of data for you      to just paste in body:
    {
      userId: '6',
      name: 'eden',
      email: 'eden@gmail.com',
      age: 60,
    }
  
  You will get a msg saying "added successfully" and the added information.
  
  NOTE: The age is set as an example to be allowed above 18.
 
3. In postman, send POST Request to "http://localhost:3000/users/userId" to get information about a particular user. Entering wrong userId will not crash the      server, as the code is sufficiently error handled.Note that you have to send information as JSON. To do that go to body, select raw from options and              from drop down menu select JSON. Look for the proper format for JSON. To avoid typing, here is one samples of data for you to just paste in body:

      "http://localhost:3000/users/2"
      {
        userId: '10',
        name: 'paul',
        email: 'paul@gmail.com',
        age: 21,
      }
  
   You will get a msg saying "updated successfully" and the added information.

   You can check with GET request before and after to verify that it is updated successfully.

   NOTE: The age is set as an example to be allowed above 18.
  
  
LIBRARIES USED:
"body-parser": "^1.20.2",
"express": "^4.18.2",
"express-validator": "^7.0.1",
"mongodb": "^5.6.0",
"mongoose": "^7.2.2"
    
