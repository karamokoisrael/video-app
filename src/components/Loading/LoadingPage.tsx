import tw from "@/styles/tailwind";
import {Colors, LoaderScreen, View} from "react-native-ui-lib";
import React from "react";

export default function LoadingPage(){
    return (
        <View style={tw`h-full w-full items-center justify-center`}>
            <LoaderScreen color={Colors.grey40}/>
        </View>
    )
}