import { Image, Pressable, StyleSheet, Text, View, StyleProp, ViewStyle } from 'react-native';
import type { Dessert } from '@/types';
import { useTheme } from '@/hooks/use-theme';
import { Spacing, FontSize, Radius } from '@/constants/theme';

type DessertCardProps = {
  dessert: Dessert;
  style?: StyleProp<ViewStyle>;
};

export default function DessertCard({ dessert, style }: DessertCardProps) {
  const theme = useTheme();

  return (
    <Pressable
      onPress={() => console.log('Open dessert ID:', dessert.id)}
      style={({ pressed }) => [
        styles.card,
        { backgroundColor: theme.card, borderColor: theme.border },
        pressed && styles.pressed,
        style,
      ]}
    >
      <View>
        <Image source={{ uri: dessert.photoUrl }} style={styles.image} />
        <Text style={[styles.badge, { backgroundColor: theme.primary, color: theme.onPrimary }]}>
          {dessert.difficulty}
        </Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={[styles.title, { color: theme.primary }]}>{dessert.name}</Text>
        <Text style={[styles.details, { color: theme.muted }]}>
          {dessert.category} • Prep: {dessert.prepTimeMins}m • Bake: {dessert.bakeTimeMins}m
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: Radius.md,
    overflow: 'hidden',
    borderWidth: 1,
    marginBottom: Spacing.md,
  },
  pressed: {
    opacity: 0.6,
  },
  image: {
    width: '100%',
    aspectRatio: 16 / 9,
  },
  badge: {
    position: 'absolute',
    top: Spacing.sm,
    right: Spacing.sm,
    paddingHorizontal: Spacing.sm,
    paddingVertical: 2,
    borderRadius: Radius.pill,
    fontSize: FontSize.small,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  infoContainer: {
    padding: Spacing.md,
    gap: Spacing.xs,
  },
  title: {
    fontSize: FontSize.title,
    fontWeight: 'bold',
  },
  details: {
    fontSize: FontSize.small,
  },
});