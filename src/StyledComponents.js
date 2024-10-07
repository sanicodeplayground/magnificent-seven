import styled, { createGlobalStyle } from "styled-components";

/* Global styles */
/* Base styles */
export const GlobalStyles = createGlobalStyle`
:root {
  /* Text Colors */
  --text-primary: #182639;
  --text-secondary: #626262;

  /* Pitch */
  --bg-pitch: #00b156;
  --bg-pitch-2: #00a952;

  /* Background Colors */
  --white: #fff;
  --bg-light-2: #e9e1e8;

  --bg-player-position: #068945;
  --card-bg-color: #009449;
  --border-color: #08bb61;
  --accent-color: #afac17;
}

body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: var(--bg-color);
  color: var(--text-primary);
}
`;

export const Container = styled.div`
  min-height: 100vh;
  padding: 2rem;
  background-color: var(--white);
`;

export const Header = styled.header`
  text-align: center;
  margin-bottom: 2rem;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

// export const Subheading = styled.h2`
//   color: var(--white);
// `;

export const Subtitle = styled.p`
  color: var(--text-secondary);
  text-align: center;
`;

export const Main = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem;
  background: repeating-linear-gradient(
    0deg,
    var(--bg-pitch),
    var(--bg-pitch) 50px,
    var(--bg-pitch-2) 50px,
    var(--bg-pitch-2) 100px
  );
`;

export const PositionGroupContainer = styled.div`
  margin-bottom: 2rem;
`;

export const PositionGroupTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
`;

export const PositionEmoji = styled.span`
  margin-right: 0.5rem;
`;

export const PlayerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  align-items: center;
  justify-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const PlayerCardContainer = styled.div`
  font-size: 1.4rem;
  background-color: var(--card-bg-color);
  border-radius: 0.5rem;
  overflow: hidden;
  border: 2px solid var(--border-color);
  text-align: center;
  font-weight: bold;
  max-width: 400px;
  min-width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3), 0 6px 20px rgba(0, 0, 0, 0.25);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4), 0 8px 24px rgba(0, 0, 0, 0.3);
    cursor: pointer;
  }
`;

export const PlayerCardHeader = styled.div`
  padding: 0 0 1rem 0;
  text-align: center;
`;

export const PlayerPosition = styled.p`
  margin: 0 auto 1rem auto;
  padding: 1rem;
  color: var(--white);
  background-color: var(--bg-player-position);
`;
export const PlayerShirt = styled.img`
  max-width: 200px;
`;

export const PlayerName = styled.p`
  padding: 1rem;
  background-color: var(--white);
  margin: 0;
`;

export const PlayerTeam = styled.p`
  padding: 1rem;
  margin: 0;
  background-color: var(--bg-light-2);
  text-transform: uppercase;
`;

export const PlayerMagnificence = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--bg-light-2);
`;

export const TrophyIcon = styled.svg`
  width: 18px;
  height: 18px;
  margin: 0 0.5rem;
  fill: var(--accent-color);
`;
