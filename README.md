# Game Listing App

Welcome to the Game Listing App! This repository contains a web application built with React.js, Tailwind CSS, Vite, and the RAWG Video Games Database API. The app allows users to search for and view information about various video games.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [APIs Used](#apis-used)
- [Contributing](#contributing)
- [License](#license)
- [Demo](#demo)

## Introduction

The Game Listing App is a modern web application designed to provide users with detailed information about their favorite video games. By leveraging the RAWG API, the app fetches and displays data about a wide range of games, including their descriptions, release dates, genres, and more.

## Features

- Search for video games by title
- View detailed information about selected games
- Responsive design using Tailwind CSS
- Fast development and build process with Vite

## Installation

To get started with the Game Listing App, follow these steps:

1. Clone the repository:
    bash
    git clone https://github.com/your-username/game-listing-app.git
    cd game-listing-app
    

2. Install the dependencies:
    bash
    npm install
    

3. Obtain an API key from [RAWG](https://rawg.io/apidocs) and create a .env file in the root directory with the following content:
    env
    VITE_RAWG_API_KEY=your_api_key_here
    

4. Start the development server:
    bash
    npm run dev
    

5. Open your browser and navigate to http://localhost:3000 to see the app in action.

## Usage

Once the application is running, you can search for games using the search bar. Click on any game in the search results to view more detailed information about it.

## APIs Used

- *RAWG Video Games Database API:* Provides extensive data about video games, including details such as descriptions, release dates, genres, and more. For more information, visit the [RAWG API Documentation](https://rawg.io/apidocs).

## Contributing

Contributions are welcome! If you have any suggestions or improvements, please follow these steps:

1. Fork the repository
2. Create a new branch (git checkout -b feature-branch)
3. Make your changes
4. Commit your changes (git commit -m 'Add some feature')
5. Push to the branch (git push origin feature-branch)
6. Open a pull request

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Demo

The app is hosted on Vercel. You can check out the live demo [here](https://gamelisting-vsv.vercel.app/).

---
