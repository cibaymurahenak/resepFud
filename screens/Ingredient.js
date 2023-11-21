import React, { useState } from "react";
import { View, Heading, Box, Text, Image, ScrollView, HStack, Checkbox, Button, Icon, Pressable } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Ingredient = ({route}) => {
  const [groupValues, setGroupValues] = useState([]);
  const [isLoved, setIsLoved] = useState(false);
  const navigation = useNavigation();
  const params = route.params.item;

  return (
    <View flex ={1} bg={"#F8F6EB"}>
      <ScrollView>
        <Pressable onPress={() => navigation.goBack()} style={{ position: 'absolute', top: 40, left: 20, zIndex: 1 }}>
          <Icon as={Ionicons} name="arrow-back" size={10} color="black" />
        </Pressable>
        <Box p={4} mt={6}>
          <Image
            source={{ uri: params.image }}
            alt="News Image"
            w={280}
            h={200}
            resizeMode="cover"
            alignSelf="center" // Memastikan gambar tetap di tengah
            borderRadius={25}
            mt={10}
            mb={4}
          />
          <HStack space={4} alignItems="flex-start">
            <Box ml={6}>
            <Box flexDirection="row" justifyContent="space-between" alignItems="center">
              <Box flexWrap="wrap">
                <Heading size="lg" color="grey" numberOfLines={1}>
              {params.title}
                </Heading >
              </Box>
              <Text ml={"auto"}>
                {params.rating}
              </Text>
            </Box>
              <Text mt={5} fontSize={20} fontWeight= {500}>Ingredient</Text>
              <Checkbox.Group
                onChange={setGroupValues}
                value={groupValues}
                accessibilityLabel="choose numbers"
                // colorScheme="orange"
              >
                <Checkbox value="one" my={2} rounded="full" colorScheme="orange">
                  Bahan 1
                </Checkbox>
                <Checkbox value="two" my={2} rounded="full" colorScheme="orange">
                  Bahan 2
                </Checkbox>
                <Checkbox value="three" my={2} rounded="full" colorScheme="orange">
                  Bahan 3
                </Checkbox>
                <Checkbox value="four" my={2} rounded="full" colorScheme="orange">
                  Bahan 4
                </Checkbox>
              </Checkbox.Group>
            </Box>
          </HStack>
        </Box>
        <Box alignItems="center" padding={20} flexDirection="row" justifyContent="center">
        <Button
          size="lg"
          borderRadius={10}
          mr={5}
          onPress={() => navigation.navigate("Recipe", { params: params })}
          bg="#FAA70A"
        >
          Watch Recipe
        </Button>

        <Button
          size={"lg"}
          borderRadius={50}
          onPress={() => setIsLoved(!isLoved)} // Toggle warna tombol love
          bg="#FAA70A"
        >
          <Icon as={Ionicons} color={isLoved ? "#FFFFFF" : "#F8F6EB"} name="heart" />
        </Button>
      </Box>
      </ScrollView>
    </View>
  );
};

export default Ingredient;
