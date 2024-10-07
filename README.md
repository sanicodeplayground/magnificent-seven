# The Magnificent 7 ⚽️🏆

## Overview

The Magnificent 7 is a React application that showcases the highest-scoring 7-a-side football team based on combined goals and assists. It fetches player data from an API and displays the top performers in each position: 1 goalkeeper, 2 defenders, 3 midfielders, and 1 forward.

## Features

- Fetches player data from an external API
- Calculates player "magnificence" based on goals and assists
- Selects the top players for each position
- Displays player cards with relevant information
- Responsive design for various screen sizes

## Technologies used

- React + Vite
- JavaScript (ES6+)
- CSS (styled-components)
- Deployed in Vercel

## Setup

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm run dev
   ```
5. Open your browser and visit `http://localhost:3000` to view the app.

## How it works

1. The app fetches data from the API specified in `API_URL`.
2. It processes the data to create a map of team IDs to team names.
3. The `selectMagnificent7` function selects the top players for each position based on their "magnificence" score (goals + assists).
4. The selected players are displayed in position groups: Goalkeepers, Defenders, Midfielders, and Forwards.
5. Each player card shows the player's name, team, position, and magnificence score.

## Components

- `App`: The main component that renders the Magnificent7 component.
- `Magnificent7`: Manages the state and data fetching for the application.
- `PositionGroup`: Renders a group of players for a specific position.
- `PlayerCard`: Displays individual player information.

## Styling

The app uses styled-components for styling. The styles are imported from `./StyledComponents`.

## API

The app fetches data from:

```
https://cors-proxy-90954623675.europe-west1.run.app/
```

Ensure you have the necessary permissions to access this API.

## Improvements and ideas

- Add error handling for API fetch failures
- Implement loading spinners or even better, use skeletons
- Add unit and integration tests (I haven't done testing)
- Split into different files/components
- Use custom hook to fetch data from API

## End

Thank you! Sanita 🙌
