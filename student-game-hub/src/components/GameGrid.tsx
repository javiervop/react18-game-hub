import { SimpleGrid, Text, Skeleton } from "@chakra-ui/react";
import useGames, { Platform } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenres";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
  // selectedGenre: Genre | null;
  // selectedPlatform: Platform | null;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data: games, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  if (error) return <Text>{error}</Text>;

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      padding="10px"
      spacing={6}
    >
      {games.length === 0 &&
        skeletons.map((skeleton) => (
          <GameCardContainer key={skeleton}>
            {" "}
            <GameCardSkeleton />{" "}
          </GameCardContainer>
        ))}
      {games.length > 0 &&
        games.map((game) => (
          <GameCardContainer key={game.id}>
            {" "}
            <GameCard game={game} />{" "}
          </GameCardContainer>
        ))}
    </SimpleGrid>
  );
};

export default GameGrid;
