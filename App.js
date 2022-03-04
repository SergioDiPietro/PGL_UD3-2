import { StyleSheet, Text, View } from 'react-native';
import Colors from './constants/Colors';

export default function App() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.balanceContainer}></View>
      <View style={styles.transactionListContainer}>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40
  },
  balanceContainer: {
    flex: 1,
    borderRadius: 10,
    width: '95%'
  }, 
  transactionListContainer: {
    flex: 4,
    backgroundColor: Colors.primary,
    borderRadius: 10,
    width: '95%'
  }
});
