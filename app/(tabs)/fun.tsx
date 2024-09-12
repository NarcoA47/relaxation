import { View, Text, StyleSheet } from 'react-native';

export default function ExploreScreen() {
  return (
    <View style={styles.container}>
      <Text>This is the Fun Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});