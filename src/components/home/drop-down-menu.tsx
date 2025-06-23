import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import * as DropdownMenuPrimitive from "@rn-primitives/dropdown-menu";
import * as React from "react";
import { StyleSheet, Text, View, ViewStyle } from "react-native";
const INDICATOR_STYLE: ViewStyle = {
  height: 5,
  width: 5,
  backgroundColor: "red",
  borderRadius: 50,
  position: "absolute",
  left: -10,
  top: 6,
};

function DropdownMenu() {
  const [checkboxValue, setCheckboxValue] = React.useState(false);
  const [subCheckboxValue, setSubCheckboxValue] = React.useState(false);
  const [radioValue, setRadioValue] = React.useState("pedro");

  return (
   <DropdownMenuPrimitive.Root  className=" z-10">
        <DropdownMenuPrimitive.Trigger className="">
          <FontAwesome6 name="bars-staggered" size={20} color="black" />
       
        </DropdownMenuPrimitive.Trigger>

        <DropdownMenuPrimitive.Portal>
          <DropdownMenuPrimitive.Overlay style={[StyleSheet.absoluteFill  ]}>
            <DropdownMenuPrimitive.Content align='end' className=" bg-white border border-zinc-200 rounded-xl  mt-3 elevation-sm shadow-lg">
              <View className={"px-4 py-4 flex-col gap-3"}>
                <DropdownMenuPrimitive.Item className="flex flex-row items-center justify-between gap-16">
                  <Text className="font-semibold">Appearance</Text>
                  <MaterialIcons name="navigate-next" size={24} color="gray"  />
                </DropdownMenuPrimitive.Item>
                <DropdownMenuPrimitive.Item>
                  <Text  className="font-semibold">Insights</Text>
                </DropdownMenuPrimitive.Item>
                <DropdownMenuPrimitive.Item>
                  <Text  className="font-semibold">Settings</Text>
                </DropdownMenuPrimitive.Item>
              </View>

              <DropdownMenuPrimitive.Separator className="border-b  border-b-zinc-300 my-2" />

              <View className={"px-4 py-4 flex-col gap-3"}>
                <DropdownMenuPrimitive.Item className="flex flex-row items-center justify-between gap-16">
                  <Text className="font-semibold">Feeds</Text>
                  <MaterialIcons name="navigate-next" size={24} color="gray"  />
                </DropdownMenuPrimitive.Item>
                <DropdownMenuPrimitive.Item>
                  <Text  className="font-semibold">Saved</Text>
                </DropdownMenuPrimitive.Item>
                <DropdownMenuPrimitive.Item>
                  <Text  className="font-semibold">Liked</Text>
                </DropdownMenuPrimitive.Item>
              </View>

              <DropdownMenuPrimitive.Separator className="border-b  border-b-zinc-300 my-2" />

              <View className={"px-4 py-4 flex-col gap-3"}>
                <DropdownMenuPrimitive.Item>
                  <Text  className="font-semibold">Report a problem</Text>
                </DropdownMenuPrimitive.Item>
                <DropdownMenuPrimitive.Item>
                  <Text  className="font-semibold text-red-600">Logout</Text>
                </DropdownMenuPrimitive.Item>
              </View>
            </DropdownMenuPrimitive.Content>
          </DropdownMenuPrimitive.Overlay>
        </DropdownMenuPrimitive.Portal>
      </DropdownMenuPrimitive.Root>
  );
}

export default DropdownMenu;
