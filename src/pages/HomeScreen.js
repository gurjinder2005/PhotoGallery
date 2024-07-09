import * as FileSystem from "expo-file-system";

import {
  ActivityIndicator,
  Alert,
  FlatList,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Appbar, Card, IconButton } from "react-native-paper";
import React, { useState } from "react";

import { Text } from "react-native";
import axios from "axios";

const PIXABAY_API_KEY = "44846245-b33c2953c0d377a543b795de8";

const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleDownload = async (url) => {
    try {
      const fileName = url.split("/").pop();
      const { uri } = await FileSystem.downloadAsync(
        url,
        `${FileSystem.documentDirectory}${fileName}`
      );
      Alert.alert(
        "Download Success",
        `Image has been downloaded successfully to `,
        [{ text: "OK" }]
      );
      console.log("Finished downloading to ", uri);
    } catch (error) {
      Alert.alert("Download Error", "Failed to download image.", [
        { text: "OK" },
      ]);
      console.error(error);
    }
  };

  const handleSearch = async () => {
    if (!searchQuery.trim()) {
      return;
    }

    setLoading(true);
    try {
      const response = await axios.get(`https://pixabay.com/api/`, {
        params: {
          key: PIXABAY_API_KEY,
          q: searchQuery,
          image_type: "photo",
          per_page: 30,
        },
      });
      setImages(response.data.hits);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const renderImage = ({ item }) => (
    <Card style={styles.card}>
      <Image source={{ uri: item.webformatURL }} style={styles.image} />
      <Card.Actions>
        <IconButton
          icon="download"
          onPress={() => handleDownload(item.largeImageURL)}
        />
      </Card.Actions>
    </Card>
  );

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Photo Gallery" />
      </Appbar.Header>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search images..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          onSubmitEditing={handleSearch}
          style={styles.searchInput}
        />
      </View>

      {!searchQuery ? (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              borderWidth: 2,
              borderColor: "pink",
              height: 200,
              borderRadius: 20,
              width: 320,
            }}>
            <Text style={{ textAlign: "center" }}>
              Please add a title that you want to search in the search box.
              Thanks!
            </Text>
          </View>
        </View>
      ) : loading ? (
        <ActivityIndicator size="large" style={styles.loadingIndicator} />
      ) : (
        <FlatList
          data={images}
          renderItem={renderImage}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          contentContainerStyle={styles.grid}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  searchContainer: {
    padding: 10,
  },
  searchInput: {
    backgroundColor: "#f1f1f1",
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 40,
  },
  grid: {
    padding: 10,
  },
  card: {
    flex: 1,
    margin: 5,
    elevation: 4,
  },
  image: {
    height: 150,
    borderRadius: 5,
  },
  loadingIndicator: {
    marginTop: 20,
  },
});

export default HomeScreen;
