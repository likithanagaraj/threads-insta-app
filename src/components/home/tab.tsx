import * as TabsPrimitive from "@rn-primitives/tabs";
import React from "react";
import { Text, View } from "react-native";
const Tabs = () => {
  const [value, setValue] = React.useState("account");
  return (
    <View className=" ">
      <TabsPrimitive.Root
        value={value}
        onValueChange={(value) => setValue(value)}
        className="w-full flex-1 "
      >
        <TabsPrimitive.List className="flex flex-row justify-between w-full   border-b-2 border-gray-200 ">
          <TabsPrimitive.Trigger
            className={
              value === "account"
                ? "border-b-2 h-full w-1/2  border-black flex items-center pb-2"
                : " h-full w-1/2   flex items-center pb-2"
            }
            value="account"
          >
            <Text
              className={
                value === "account"
                  ? "text-xl font-bold text-black"
                  : "text-xl font-normal text-gray-500"
              }
            >
              For you
            </Text>
          </TabsPrimitive.Trigger>
          <TabsPrimitive.Trigger
            className={
              value === "password"
                ? "border-b-2 h-full w-1/2  border-black flex items-center pb-2"
                : " h-full w-1/2   flex items-center pb-2"
            }
            value="password"
          >
            <Text
              className={
                value === "password"
                  ? "text-xl font-bold text-black"
                  : "text-xl font-normal text-gray-500"
              }
            >
              Following
            </Text>
          </TabsPrimitive.Trigger>
        </TabsPrimitive.List>
        <TabsPrimitive.Content value="account">
          <Text className="text-lg">Account content</Text>
        </TabsPrimitive.Content>
        <TabsPrimitive.Content value="password">
          <Text className="text-lg">Password content</Text>
        </TabsPrimitive.Content>
      </TabsPrimitive.Root>
    </View>
  );
};

export default Tabs;
