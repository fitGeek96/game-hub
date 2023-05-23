import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GameGenreSkeleton from "./GameGenreSkeleton";

const GenreList = () => {
  const { data, isLoading } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <List>
      {isLoading &&
        skeletons.map((skeleton) => (
          <ListItem>
            <GameGenreSkeleton key={skeleton} />
          </ListItem>
        ))}
      {data.map((genre) => (
        <ListItem key={genre.id} padding={2}>
          <HStack>
            <Image
              boxSize={"40px"}
              src={getCroppedImageUrl(genre.image_background)}
              borderRadius={8}
            />
            <Text fontSize={"lg"}>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
