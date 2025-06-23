import React from "react";
import { Text, View } from "react-native";
import DropdownMenu from "./drop-down-menu";

const Header = () => {
  return (
    <View className="flex flex-row w-full bg-black" >
      <Text>G</Text>
    
      <DropdownMenu />
    </View>
  );
};

export default Header;
