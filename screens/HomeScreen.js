import React from "react";
import { Heading, Image, Text, Box, View, FlatList, Icon, ScrollView } from "native-base";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import resep from "../resep";
import restaurants from "../restaurant"; 
import { SliderBox } from 'react-native-image-slider-box';
import { Ionicons } from "@expo/vector-icons";
// import datas from "./datas"

const HomeScreen = () => {
  const navigation = useNavigation(); 

  const renderRecipeItem = ({ item }) => (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => navigation.navigate("Ingredient", { item: item })}
      >
        <Box w={"48"} mr={"4"} ml={"4"} position="relative">
          <Heading
            fontSize={"sm"}
            lineHeight={"xs"}
            ellipsizeMode="tail"
            numberOfLines={2}
            zIndex={1} 
            position="absolute"
            bottom={2}
            p={2}
            color={"white"}
            bg="#FAA70A"
          >
            {item.title}
          </Heading>
          <Image
            source={{ uri: item.image }}
            w="full"
            h="150"
            alt="Image Data"
            mb={"1"}
            borderRadius={10}
          />
        </Box>
      </TouchableOpacity>
    );
    
    const renderRestaurantItem = ({ item }) => (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => navigation.navigate("DetailRestaurant", { restaurant: item })}
      >
        <Box w={"48"} mr={"4"} ml={"4"} position="relative">
          <Heading
            fontSize={"sm"}
            lineHeight={"xs"}
            ellipsizeMode="tail"
            numberOfLines={2}
            zIndex={1} 
            position="absolute"
            bottom={2}
            p={2}
            color={"white"}
            bg="#FAA70A"
          >
            {item.title}
          </Heading>
          <Image
            source={{ uri: item.image }}
            w="full"
            h="150"
            alt="Restaurant Image"
            mb={"2"}
            borderRadius={10}
          />
        </Box>
      </TouchableOpacity>
    );
    
    return (
    <ScrollView>
      <Box bg="#F8F6EB" flex={1}>
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 60 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              source={require('../assets/profile.jpg')}
              style={{ width: 50, height: 50, borderRadius: 25, marginLeft: 20 }}
            />
            <Text fontSize={16} ml={3}>Hallo Sasa!!</Text>
          </View>
          <Icon as={Ionicons} size={30} mr={4} style={{ marginLeft: 'auto' }} name="search-outline" />
        </View>
        <SliderBox
          images={[
            require('../assets/image1.jpg'),
            require('../assets/image2.jpg'),
            require('../assets/image3.jpg'),
            require('../assets/image4.jpg'),
            require('../assets/image5.jpg'),
          ]}
          resizeMode={'contain'}
          style={{ width: '250', height: 230, marginTop: 20 }}
        />
        <Box py={"2"} pt={3}>
          <Text ml={4} fontWeight={700} mb={3}>Resep rekomendasi Untuk Sasa</Text>
          <FlatList
            data={resep}
            renderItem={renderRecipeItem}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            horizontal={true} 
          />
        </Box>
        <Box py={"2"} pt={2}>
          <Text ml={4} fontWeight={700} mb={3}>Restaurant Recommendations</Text>
          <FlatList
            data={restaurants}
            renderItem={renderRestaurantItem}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            horizontal={true} 
          />
        </Box>
      </Box>
    </ScrollView>
  );
};

export default HomeScreen;
