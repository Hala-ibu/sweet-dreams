import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import type { Dessert } from '@/types';

type DessertDetailsProps = {
  dessert: Dessert;
};

export default function DessertDetails({ dessert }: DessertDetailsProps) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: dessert.photoUrl }} style={styles.image} />
      <Text style={styles.title}>{dessert.name}</Text>
      <View style={styles.metaRow}>
        <Text style={styles.metaText}>Prep: {dessert.prepTimeMins}m</Text>
        <Text style={styles.metaText}>Bake: {dessert.bakeTimeMins}m</Text>
        <Text style={styles.metaText}>Temp: {dessert.tempFahrenheit}°F</Text>
      </View>
      <Text style={styles.sectionHeader}>Ingredients</Text>
      {dessert.ingredients.map((item, idx) => (
        <Text key={idx} style={styles.itemText}>• {item}</Text>
      ))}
      <Text style={styles.sectionHeader}>Baking Steps</Text>
      {dessert.steps.map((step, idx) => (
        <Text key={idx} style={styles.itemText}>{idx + 1}. {step}</Text>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  image: { width: '100%', height: 200, borderRadius: 12 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#702459', marginVertical: 12 },
  metaRow: { flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#FAF5FF', padding: 10, borderRadius: 8, marginBottom: 16 },
  metaText: { fontWeight: '600', color: '#702459' },
  sectionHeader: { fontSize: 18, fontWeight: 'bold', marginTop: 12, marginBottom: 6, color: '#2D3748' },
  itemText: { fontSize: 15, marginVertical: 2, color: '#4A5568' },
});