import * as MediaLibrary from "expo-media-library";

import { Appbar, Card } from "react-native-paper";
import {
  Image,
  Platform,
  SectionList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";

const DetailsScreen = () => {
  const [sections, setSections] = useState([]);

  const loadImages = async () => {
    try {
      const { status } = await MediaLibrary.requestPermissionsAsync();

      if (status !== "granted") {
        console.error("Permission to access media library denied");
        return;
      }

      const assets = await MediaLibrary.getAssetsAsync({
        mediaType: ["photo"],
      });

      const categorizedImages = assets.assets.map((asset) => {
        const dateTime = new Date(asset.creationTime);
        const year = dateTime.getFullYear();
        const month = dateTime.toLocaleString("default", { month: "short" });

        return {
          uri: asset.uri,
          year: year.toString(),
          month,
          day: dateTime.getDate().toString().padStart(2, "0"),
          hour: dateTime.getHours().toString().padStart(2, "0"),
          minute: dateTime.getMinutes().toString().padStart(2, "0"),
          second: dateTime.getSeconds().toString().padStart(2, "0"),
          name: asset.filename,
        };
      });

      const groupedByMonthYear = categorizedImages.reduce((groups, image) => {
        const monthYear = `${image.year}-${image.month}`;
        if (!groups[monthYear]) {
          groups[monthYear] = [];
        }
        groups[monthYear].push(image);
        return groups;
      }, {});

      const sections = Object.keys(groupedByMonthYear).map((key) => {
        const [year, month] = key.split("-");
        return {
          title: `${year}-${month}`,
          data: groupedByMonthYear[key],
        };
      });

      setSections(sections);
    } catch (error) {
      console.error("Error loading images:", error);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      loadImages();
    }, 2000); // Run every 2 seconds

    return () => clearInterval(interval);
  }, []); // Empty dependency array to run only on mount and clean up on unmount

  const renderImage = ({ item }) => (
    <Card style={styles.card}>
      <Image source={{ uri: item.uri }} style={styles.image} />
      <View style={styles.imageDetails}>
        <Text style={{ color: "#fff" }}>
          {item.day}-{item.month}-{item.year}
        </Text>
      </View>
    </Card>
  );

  const renderSectionHeader = ({ section: { title } }) => (
    <View style={styles.sectionHeader}>
      <Text style={[styles.headerText]}>{title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="My Gallery" />
      </Appbar.Header>
      <SectionList
        sections={sections}
        keyExtractor={(item, index) => item.uri + index}
        renderItem={renderImage}
        renderSectionHeader={renderSectionHeader}
        contentContainerStyle={styles.grid}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
  imageDetails: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 5,
    alignItems: "center",
  },
  sectionHeader: {
    flex: 1,
    margin: 5,
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default DetailsScreen;
