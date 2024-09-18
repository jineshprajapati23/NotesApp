NotesApp
A full-stack application developed using React for the frontend and Node.js with Express for the backend. This application allows users to create, update, and delete notes.

Table of Contents
Installation
Usage
Contributing
License
Installation
Prerequisites
This application requires Node.js and npm (or yarn) to be installed on your system. You can download them from the official website: Node.js   

Frontend and Backend
Clone this repository.
Navigate to the project root directory.
Frontend Dependencies
Navigate to the frontend directory and install the dependencies:

Bash
cd frontend
npm install
Use code with caution.

Backend Dependencies
Go back to the root directory and then navigate to the backend directory to install the backend dependencies:

Bash
cd ..
cd backend
npm install
Use code with caution.

Start the Backend Server
Start the backend server using npm:

Bash
npm start
Use code with caution.

The backend server will be available at http://localhost:1010.

Start the Frontend Development Server
In a new terminal window, navigate back to the frontend directory again and start the React app:

Bash
cd ../frontend
npm start
Use code with caution.

Open your browser and visit http://localhost:3000 to view the application in development mode.

Serve Frontend through Backend
Ensure the backend server is set up to serve the frontend build files. Make sure the following code is included in your backend entry file (e.g., backend/server.js or backend/index.js):

JavaScript
const path = require('path');
app.use(express.static(path.resolve(__dirname, 'frontend', 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'frontend',   
 'build', 'index.html'));
});
Use code with caution.

Usage
Here's a quick guide on using the NotesApp functionalities:

Create a Note:

Fill in the title and content fields.
Click the "ADD NOTE" button.
Update a Note:

Click the "Update" button on a note card.
Edit the title and content as needed.
Click "Save" to update the note.
Delete a Note:

Click the "Delete" button on the note card you want to remove.
Contributing
If you’d like to contribute to this project, please fork the repository and submit a pull request with your changes.

License
This project is licensed under the MIT License - see the LICENSE file for details.
