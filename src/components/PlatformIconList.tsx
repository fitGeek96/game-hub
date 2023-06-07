import { Icon, Text } from "@chakra-ui/react";
import { Platform } from "../hooks/usePlatforms";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    mac: FaApple,
    nintendo: SiNintendo,
    linux: FaLinux,
    ios: MdPhoneIphone,
    android: FaAndroid,
    web: BsGlobe,
  };
  return (
    <>
      {platforms.map((platform) => (
        <Icon
          as={iconMap[platform.slug]}
          marginTop={1}
          marginRight={2}
          color="gray.500"
          key={platform.id}
        >
          {platform.slug}
        </Icon>
      ))}
    </>
  );
};

export default PlatformIconList;
