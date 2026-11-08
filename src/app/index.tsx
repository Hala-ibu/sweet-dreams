import { ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { desserts } from '@/data/desserts';
import DessertCard from '@/components/DessertCard';
import { Spacing, FontSize } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const theme = useTheme();

  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        { paddingBottom: Spacing.md + insets.bottom }
      ]}
    >
      <Text style={[styles.count, { color: theme.primary }]}>
        {desserts.length} dessert recipes saved
      </Text>
      {desserts.map((dessert) => (
        <DessertCard key={dessert.id} dessert={dessert} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: Spacing.md,
  },
  count: {
    fontSize: FontSize.body,
    fontWeight: '600',
    marginBottom: Spacing.md,
  },
});