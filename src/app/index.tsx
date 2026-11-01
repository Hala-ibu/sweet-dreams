import { ScrollView, StyleSheet, Text } from 'react-native';
import { desserts } from '@/data/desserts';
import DessertCard from '@/components/DessertCard';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.count}>{desserts.length} dessert recipes saved</Text>
      {desserts.map((dessert) => (
        <DessertCard key={dessert.id} dessert={dessert} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, backgroundColor: '#F7FAFC' },
  count: { fontSize: 16, fontWeight: '600', color: '#702459', marginBottom: 12 },
});