import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenres();
  const genre = genres?.results.find((g) => g.id === gameQuery.genreId);

  const { data: platforms } = useGenres();
  const platform = platforms?.results.find(
    (p) => p.id === gameQuery.platformId,
  );

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading as={"h1"} marginLeft={2} fontSize={"6xl"}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
