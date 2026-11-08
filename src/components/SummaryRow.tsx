import { StyleSheet, Text, View } from 'react-native';
import { desserts } from '@/data/desserts';
import { useTheme } from '@/hooks/use-theme';
import { Spacing, FontSize, Radius } from '@/constants/theme';

export default function SummaryRow() {
  const theme = useTheme();

  const totalRecipes = desserts.length;
  const avgBakeTime = Math.round(
    desserts.reduce((acc, cur) => acc + cur.bakeTimeMins, 0) / totalRecipes
  );
  const easyCount = desserts.filter((d) => d.difficulty === 'easy').length;

  return (
    <View style={styles.row}>
      <View style={[styles.box, { backgroundColor: theme.card, borderColor: theme.border }]}>
        <Text style={[styles.number, { color: theme.primary }]}>{totalRecipes}</Text>
        <Text style={[styles.label, { color: theme.muted }]}>Recipes</Text>
      </View>

      <View style={[styles.box, { backgroundColor: theme.card, borderColor: theme.border }]}>
        <Text style={[styles.number, { color: theme.primary }]}>{avgBakeTime}m</Text>
        <Text style={[styles.label, { color: theme.muted }]}>Avg Bake</Text>
      </View>

      <View style={[styles.box, { backgroundColor: theme.card, borderColor: theme.border }]}>
        <Text style={[styles.number, { color: theme.primary }]}>{easyCount}</Text>
        <Text style={[styles.label, { color: theme.muted }]}>Easy</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: Spacing.sm,
    marginBottom: Spacing.md,
  },
  box: {
    flex: 1,
    padding: Spacing.md,
    borderRadius: Radius.md,
    borderWidth: 1,
    alignItems: 'center',
  },
  number: {
    fontSize: FontSize.title,
    fontWeight: 'bold',
  },
  label: {
    fontSize: FontSize.small,
    marginTop: Spacing.xs,
  },
});