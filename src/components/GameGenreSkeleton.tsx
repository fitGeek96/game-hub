import { Box, HStack, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameGenreSkeleton = () => {
  return (
    <Box>
        <Skeleton boxSize="40px" />
        <SkeletonText />
    </Box>
  );
};

export default GameGenreSkeleton;
