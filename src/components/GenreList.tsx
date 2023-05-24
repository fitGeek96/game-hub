import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GameGenreSkeleton from "./GameGenreSkeleton";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { data, isLoading } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <List>
      {isLoading &&
        skeletons.map((skeleton) => (
          <ListItem key={skeleton}>
            <GameGenreSkeleton />
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
            <Button
              fontSize={"lg"}
              variant={"link"}
              onClick={() => onSelectGenre(genre)}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
