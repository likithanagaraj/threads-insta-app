import DropdownMenu from "@/src/components/home/drop-down-menu";
import Tabs from "@/src/components/home/tab";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const index = () => {
  const [value, setValue] = React.useState("account");
  return (
    <SafeAreaView className="flex-1 gap-10 bg-white px-6 py-5">
      <View className="flex flex-row items-center  justify-end gap-40">
          <FontAwesome6 name="threads" size={28} color="black" />
        <DropdownMenu/>
      </View>
      <View>
        <Tabs/>
      </View>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({});
