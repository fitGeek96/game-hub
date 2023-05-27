import { Box, Image, ImageProps } from "@chakra-ui/react";
import React from "react";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: {
    [key: number]: { emoji: string; alt: string; fontSize: string };
  } = {
    3: { emoji: "☹️", alt: "meh", fontSize: "20px" },
    4: { emoji: "👍", alt: "recommended", fontSize: "20px" },
    5: { emoji: "🎯", alt: "exceptional", fontSize: "20px" },
  };

  return (
    <Box
      marginTop={1}
      marginLeft={-1}
      padding={0}
      fontSize={emojiMap[rating].fontSize}
    >
      {emojiMap[rating].emoji}
    </Box>
  );
};

export default Emoji;
