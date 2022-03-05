import { View, StyleSheet, Text} from 'react-native'

export const TransactionCard = ({item}) => {
  return (
    <View style={styles.container}>
        <View style={styles.icon}></View>
        <View style={styles.description}>
            <Text>{item.value.description}</Text>
        </View>
        <View style={styles.amount}>{item.value.amount}</View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        marginBottom: 10
    },
    icon: {
        flex: 1
    },
    description: {
        flex: 7
    },
    amount: {
        flex: 2
    }
});