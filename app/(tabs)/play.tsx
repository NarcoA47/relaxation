import { View, Text, StyleSheet } from 'react-native';

export default function PlayScreen() {
  return (
    <View style={styles.container}>
      <Text>This is the Play Screen</Text>
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