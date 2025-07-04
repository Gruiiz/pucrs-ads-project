📚 Reading Journal Project – PUCRS
This project is an application for a CRUD Reading Journal. It was developed as part of the Frontend Systems Development course in the Online Undergraduate Program at PUCRS, using React.

🚀 Technologies Used
React

Tailwind CSS

Axios

Material UI (MUI)

React Router DOM

Vitest

💻 How to Run the React Application

In the root folder of your project (where the package.json file is located), run:

npm install

npm run dev

✍️ Features

✅ Register new books
✏️ Edit existing books
❌ Delete books
📋 List all registered books
💬 Visual feedback after actions

The application consumes data from a local API, which must also be running for the system to work correctly.

📦 Cloning the Project and Running the API
Clone the API repository:
git clone https://github.com/adsPucrsOnline/DesenvolvimentoFrontend/

Navigate to the API folder:
cd ./DesenvolvimentoFrontend/readingJournal-api/

Install the API dependencies:
npm install

Start the API server:
npm start

The API will be available at: http://localhost:5000/books

🧪 Running Tests

This project uses Vitest for unit testing.

To run tests via terminal:
npm run test

Or use the visual test interface:
npm run test:ui