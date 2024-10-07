import { useCallback, useEffect, useState } from "react";
import {
  GlobalStyles,
  Container,
  Header,
  Title,
  Subtitle,
  Main,
  PositionGroupContainer,
  PositionGroupTitle,
  PositionEmoji,
  PlayerGrid,
  PlayerCardContainer,
  PlayerCardHeader,
  PlayerPosition,
  PlayerShirt,
  PlayerName,
  PlayerTeam,
  PlayerMagnificence,
  TrophyIcon,
} from "./StyledComponents";

// API URL to fetch data
const API_URL = "https://cors-proxy-90954623675.europe-west1.run.app/";

const positionEmojis = {
  1: "🧤", // Goalkeeper
  2: "🛡️", // Defender
  3: "🏃", // Midfielder
  4: "⚽️", // Forward
};

// Main App component
export default function App() {
  return (
    <>
      <GlobalStyles />
      <Magnificent7 />
    </>
  );
}

// Magnificent7 component
const Magnificent7 = () => {
  const [team, setTeam] = useState([]);
  const [teamMap, setTeamMap] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to fetch data from API
  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();

      // Create a team list from team IDs
      const teamList = {};
      data.teams.forEach((team) => {
        teamList[team.id] = team.name;
      });
      setTeamMap(teamList);

      // Select the magnificent 7 players
      const magnificent7 = selectMagnificent7(data.elements);

      setTeam(magnificent7);
      setLoading(false);
    } catch (err) {
      setError("Hold on, failed to fetch data", err);
      setLoading(false);
    }
  }, []);

  // Fetch data when component mounts
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Function to select magnificent 7 players
  const selectMagnificent7 = (players) => {
    const positionCounts = { 1: 1, 2: 2, 3: 3, 4: 1 }; // GK, DEF, MID, FWD
    const selectedPlayers = [];

    // Calculate magnificence for each player
    players.forEach((player) => {
      player.magnificence = player.goals_scored + player.assists;
    });

    // Select top players for each position
    for (let position = 1; position <= 4; position++) {
      const positionPlayers = players
        .filter((pl) => pl.element_type === position)
        .sort((a, b) => b.magnificence - a.magnificence)
        .slice(0, positionCounts[position]);

      selectedPlayers.push(...positionPlayers);
    }
    return selectedPlayers;
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <Container>
      <Header>
        <Title>⚽️ The Magnificent 7 🏆</Title>
      </Header>
      <Subtitle>
        The highest scoring 7-a-side team based on combined goals and assists
      </Subtitle>
      <Main>
        {[1, 2, 3, 4].map((position) => (
          <PositionGroup
            key={position}
            title={
              [
                "Goalkeepers (1)",
                "Defenders (2)",
                "Midfielders (3)",
                "Forwards (1)",
              ][position - 1]
            }
            players={team.filter((player) => player.element_type === position)}
            teamMap={teamMap}
          />
        ))}
      </Main>
    </Container>
  );
};

// PositionGroup component to render players of a specific position
const PositionGroup = ({ title, players, teamMap }) => {
  return (
    <PositionGroupContainer>
      <PositionGroupTitle>
        <PositionEmoji>
          {positionEmojis[players[0]?.element_type]}
        </PositionEmoji>
        {title}
      </PositionGroupTitle>
      <PlayerGrid>
        {players.map((player) => (
          <PlayerCard key={player.id} {...player} teamMap={teamMap} />
        ))}
      </PlayerGrid>
    </PositionGroupContainer>
  );
};

// PlayerCard component to render information about individual players
const PlayerCard = ({
  first_name,
  second_name,
  team,
  element_type,
  magnificence,
  teamMap,
}) => {
  return (
    <PlayerCardContainer>
      <PlayerCardHeader>
        <PlayerPosition>
          {
            ["Goalkeeper", "Defender", "Midfielder", "Forward"][
              element_type - 1
            ]
          }
        </PlayerPosition>
        <PlayerShirt src="t-shirt.png" alt="Football player t-shirt" />
      </PlayerCardHeader>
      <div>
        <PlayerName>
          {first_name} {second_name}
        </PlayerName>
        <PlayerTeam>
          <span>Team: </span>
          {teamMap[team] || "Unknown Team"}
        </PlayerTeam>

        <PlayerMagnificence>
          <p>
            <span>MAGNIFICENCE:</span>
            <TrophyIcon
              className="trophy-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
              <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
              <path d="M4 22h16"></path>
              <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
              <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
              <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
            </TrophyIcon>
            <span>{magnificence}</span>
          </p>
        </PlayerMagnificence>
      </div>
    </PlayerCardContainer>
  );
};
