# NotesApp

This is a full-stack application built with React for the frontend and Node.js with Express for the backend. It allows users to create, update, and delete notes.

## Table of Contents
* Prerequisite
* Frontend and Backend Dependencies
* Usage
* Contributing
* License


## Prerequisites
Use the package manager [npm](https://nodejs.org/en/) to install Nodejs.

## Frontend and Backend
1. Clone this repository
2. Navigate to the project root directory.

## Frontend Dependencies
Navigate to the frontend directory and install the dependencies:
```bash
cd frontend
npm install
```

## Backend Dependencies
Navigate to the backend directory and install the dependencies:
```bash
cd backend
npm install
```
## Start the Backend Server
```bash
nodemon app.js
```
The backend server will be available at http://localhost:1010.

## Start the Frontend Server
```bash
cd ../fronend
npm start
```
Open your browser and visit http://localhost:3000 to view the application in development mode.

## Serve Frontend through Backend
```javascript
const path = require('path');
app.use(express.static(path.resolve(__dirname, 'frontend', 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
});
```


## Usage

Here's a quick guide on using the NotesApp functionalities:

**Create a Note:**
1. Fill in the title and content fields.
2. Click the "ADD NOTE" button.

**Update a Note:**
1. Click the "Update" button on a note card.
2. Edit the title and content as needed.
3. Click "Update Note" to update the note.

**Delete a Note:**
1. Click the "Delete" button on the note card you want to remove.


```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
