import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

const NewsDetailScreen = ({ route }) => {
  const { berita } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Text style={styles.title}>{berita.judul}</Text>
      <Image source={{ uri: berita.img }} style={styles.image} />
      <Text style={styles.subtitle}>{berita.subJudul}</Text>
      {/* Tambahkan konten berita lengkap jika ada */}
      <Text style={styles.content}>
        {berita.deskripsi ||
          "Konten lengkap berita bisa ditampilkan di sini..."}
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    padding: 10,
    backgroundColor: "#f8f8f8",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 5,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: "#555",
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
    color: "#333",
    lineHeight: 24,
    textAlign: "justify", // Rata kanan-kiri
  },
});

export default NewsDetailScreen;
