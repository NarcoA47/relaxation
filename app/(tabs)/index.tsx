import { Image, StyleSheet, Platform, View, Text } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import LeadingBanner from '@/components/home/LeadingBanner';
import { Colors, customColors } from '@/constants/Colors';
import DetailCard from '@/components/home/DetailCard';

export default function HomeScreen() {

  const colorsScheme = customColors;

  return (
    <ThemedView style={[styles.container, { backgroundColor: colorsScheme.background }]}> 
      <LeadingBanner />
      <DetailCard/>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }

});
