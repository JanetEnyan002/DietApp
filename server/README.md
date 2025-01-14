# DietApp

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:
- Node.js
- npm (Node Package Manager)
- MongoDB

### Installation

1. Clone the repository:
	```bash
	git clone https://github.com/yourusername/dietapp.git
	cd dietapp
	```
2. Install the dependencies:
	```bash
	npm install
	```

3. Create a `.env` file in the root directory and add the following environment variables:
	```
	MONGODB_URI=your_mongodb_uri
	PORT=5000
	```

### Running the Application

1. Start the MongoDB server:
	```bash
	mongod
	```

2. Start the application:
	```bash
	npm start
	```

3. Open your browser and navigate to `http://localhost:5000` to see the application running.

### Additional Scripts

- `npm run dev`: Run the application in development mode with hot reloading.
- `npm test`: Run the test suite.

### Folder Structure

- `src/`: Contains the source code of the application.
- `public/`: Contains static assets.
- `node_modules/`: Contains the installed npm packages.

### Contributing

Feel free to submit issues and pull requests.

### License

This project is licensed under the MIT License.