# Server_side


A social media platform API which supports features like getting a user profile, follow a user, upload a post, delete a post, like a post, unlike a liked post, and comment on a post.

## Features

- CRUD (Create, Read, Update, Delete) operations on Image
- Add / Remove an Image
- Update details of an Image



## Tech stack used

Following open source projects is used to create this API:

- `Node.js` - evented I/O for the backend
- `Express` - fast node.js network app framework [@tjholowaychuk]
- `MongoDB` - MongoDB is a document database with the scalability and flexibility that you want with the querying and indexing that you need.
- `MongoDB Atlas` - Real time cloud database.

## Dependencies Used

- express
- mongoose 
- dotenv
- morgan
- helmet

## Installation

Project requires [Node.js](https://nodejs.org/) to run.

Create a directory in your local system and clone the repository.
```sh
mkdir <dirname>
cd <dirname>
gh repo clone Aniketingithub/assignment_server
```

Install the required dependencies.

```sh
npm install
```

Create a .env file in your root directory and add following variables in it.
| Variable name | Its use |
| ---- | ---- |
| `MONGO_URL` | URL to your mongodb atlas database |
|  | mongodb+srv://`<username>`:`<password>`@cluster0.xjzfs.mongodb.net/`<databaseName>`?retryWrites=true&w=majority |
| `PORT` | Server-Side rendering Port No |

Start the server.
```sh
node index.js
```
The Server will start running at the provided `Port number`.

## API Endpoints

- GET `/` Lists all images of the database.
    - RETURN: Image && Image name.

- GET `/show/{id}` Lists the detailsof images.
    - RETURN: Image && Image name && Image URL.
    
- GET `/new` Renders a form where you can add new images.

- POST `/` submits the above form and add it to database.
    - Input: Name, URL
    
- GET `/{id}/edit` renders a form with prefilled details of image but cant edit it.

- PUT `/{id}/edit` renders a form with prefilled details of image but cant edit it and update the details.

- DELETE `/delete/{id}` deletes the particular image from the database.
