import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import type { Dessert } from '@/types';

type DessertCardProps = {
  dessert: Dessert;
};

export default function DessertCard({ dessert }: DessertCardProps) {
  return (
    <Pressable
      onPress={() => console.log('Open dessert ID:', dessert.id)}
      style={({ pressed }) => [styles.card, pressed && styles.pressed]}
    >
      <Image source={{ uri: dessert.photoUrl }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{dessert.name}</Text>
        <Text style={styles.details}>
          {dessert.category} • Prep: {dessert.prepTimeMins}m • Bake: {dessert.bakeTimeMins}m ({dessert.difficulty})
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#FFFaf0',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    marginBottom: 12,
  },
  pressed: { opacity: 0.6 },
  image: { width: '100%', height: 160 },
  infoContainer: { padding: 12 },
  title: { fontSize: 18, fontWeight: 'bold', color: '#702459' },
  details: { fontSize: 14, color: '#4A5568', marginTop: 4 },
});