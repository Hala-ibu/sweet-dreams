import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import type { Dessert } from '@/types';
import { useTheme } from '@/hooks/use-theme';
import { Spacing, FontSize, Radius } from '@/constants/theme';

type DessertDetailsProps = {
  dessert: Dessert;
};

export default function DessertDetails({ dessert }: DessertDetailsProps) {
  const theme = useTheme();

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.contentWrapper}>
        <Image source={{ uri: dessert.photoUrl }} style={styles.image} />
        <Text style={[styles.title, { color: theme.text }]}>{dessert.name}</Text>

        <View style={[styles.metaRow, { backgroundColor: theme.card, borderColor: theme.border }]}>
          <Text style={[styles.metaText, { color: theme.primary }]}>Prep: {dessert.prepTimeMins}m</Text>
          <Text style={[styles.metaText, { color: theme.primary }]}>Bake: {dessert.bakeTimeMins}m</Text>
          <Text style={[styles.metaText, { color: theme.primary }]}>Temp: {dessert.tempFahrenheit}°F</Text>
        </View>

        <Text style={[styles.sectionHeader, { color: theme.text }]}>Ingredients</Text>
        {dessert.ingredients.map((item, idx) => (
          <View key={idx} style={styles.listRow}>
            <Text style={[styles.itemText, { color: theme.muted }]}>• {item}</Text>
          </View>
        ))}

        <Text style={[styles.sectionHeader, { color: theme.text }]}>Baking Steps</Text>
        {dessert.steps.map((step, idx) => (
          <View key={idx} style={styles.listRow}>
            <Text style={[styles.itemText, { color: theme.muted }]}>{idx + 1}. {step}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    padding: Spacing.md,
  },
  contentWrapper: {
    width: '100%',
    maxWidth: 600,
    alignSelf: 'center',
  },
  image: {
    width: '100%',
    aspectRatio: 16 / 9,
    borderRadius: Radius.md,
  },
  title: {
    fontSize: FontSize.hero,
    fontWeight: 'bold',
    marginVertical: Spacing.md,
  },
  metaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: Spacing.md,
    borderRadius: Radius.md,
    borderWidth: 1,
    marginBottom: Spacing.lg,
  },
  metaText: {
    fontWeight: '600',
    fontSize: FontSize.body,
  },
  sectionHeader: {
    fontSize: FontSize.title,
    fontWeight: 'bold',
    marginTop: Spacing.md,
    marginBottom: Spacing.sm,
  },
  listRow: {
    marginVertical: Spacing.xs,
  },
  itemText: {
    fontSize: FontSize.body,
    flexShrink: 1,
  },
});