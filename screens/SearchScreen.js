import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    Dimensions,
    StatusBar,
    Image,
} from "react-native";
import React, { useState } from "react";
import SearchBox from "../components/search/SearchBox";
import TopicSearch from "../components/search/TopicSearch";
import SearchContent from "../components/search/SearchContent";
import { TouchableOpacity } from "react-native-gesture-handler";
import AntDesign from "react-native-vector-icons/AntDesign";

const SearchScreen = () => {
    const [image, setImage] = useState(null);

    const getData = (data) => {
        setImage(data);
    };

    const windowWidth = Dimensions.get("window").width;
    const windowHeight = Dimensions.get("window").height;

    return (
        <SafeAreaView
            style={{
                width: "100%",
                height: "100%",
                backgroundColor: "#000",
                position: "relative",
            }}
        >
            <ScrollView showsVerticalScrollIndicator={false}>
                <SearchBox />
                <TopicSearch />
                <SearchContent data={getData} />
                <TouchableOpacity
                    style={{
                        margin: 25,
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <AntDesign
                        name="pluscircleo"
                        style={{ fontSize: 40, opacity: 0.5, color: "#fff" }}
                    />
                </TouchableOpacity>
            </ScrollView>
            {image ? (
                <View
                    style={{
                        position: "absolute",
                        zIndex: 1,
                        width: "100%",
                        height: "110%",
                        backgroundColor: "rgba(52,52,52,0.8)",
                    }}
                >
                    <StatusBar
                        backgroundColor="#525252"
                    />
                    <View
                        style={{
                            position: "absolute",
                            top: windowHeight / 6,
                            left: windowWidth / 15,
                            backgroundColor: "#fff",
                            width: 370,
                            height: 495,
                            borderRadius: 15,
                            zIndex: 1,
                            // elevation: 50,
                        }}
                    >
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                paddingVertical: 10,
                                paddingHorizontal: 15,
                            }}
                        >
                            <Image
                                source={image}
                                style={{
                                    width: 30,
                                    height: 30,
                                    borderRadius: 100,
                                }}
                            />
                            <View style={{ paddingLeft: 8 }}>
                                <Text
                                    style={{ fontSize: 14, fontWeight: "600" }}
                                >
                                    hieeus
                                </Text>
                            </View>
                        </View>
                        <Image
                            source={image}
                            style={{ width: "100%", height: "80%" }}
                        />
                    </View>
                </View>
            ) : null}
        </SafeAreaView>
    );
};

export default SearchScreen;
