import React from "react";
import { Heading, Text, Box, Image, Stack, AspectRatio, Center, ScrollView, Pressable, Icon } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Recipe = ({ route }) => {
  // Pastikan route dan params ada sebelum mengakses properti
  const navigation = useNavigation();
  const kiw = route.params && route.params.params ? route.params.params : null;

  if (!kiw) {
    console.error("Data not passed correctly");
    return null;
  }

  return (
  <ScrollView>
    <Pressable onPress={() => navigation.goBack()} style={{ position: 'absolute', top: 40, left: 20, zIndex: 1 }}>
          <Icon as={Ionicons} name="arrow-back" size={10} color="black" />
    </Pressable>
    <Box alignItems="center" mt={20}>
      <Box
        maxW="80"
        rounded="lg"
        overflow="hidden"
        borderColor="coolGray.200"
        borderWidth="1"
        _dark={{
          backgroundColor: "#F8F6EB",
        }}
        _web={{
          shadow: 2,
          borderWidth: 0,
        }}
        _light={{
          backgroundColor: "#F8F6EB",
        }}
      >
        <Box>
          <AspectRatio w="100%" ratio={16 / 9}>
            {/* Pastikan kiw dan kiw.image tidak null atau undefined */}
            {kiw.image && <Image source={{ uri: kiw.image }} alt="image" />}
          </AspectRatio>
          <Center
            bg="#FAA70A"
            _dark={{
              bg: "#F8F6EB",
            }}
            _text={{
              color: "warmGray.50",
              fontWeight: "700",
              fontSize: "xs",
            }}
            position="absolute"
            bottom="0"
            px="3"
            py="1.5"
          >
            PHOTOS
          </Center>
        </Box>
        <Stack p="4" space={3}>
          <Heading size="md" ml="-1">
            {kiw.title}
          </Heading>
          <Text fontWeight="500">{kiw.content}</Text>
        </Stack>
      </Box>
    </Box>
    </ScrollView>
  );
};

export default Recipe;
