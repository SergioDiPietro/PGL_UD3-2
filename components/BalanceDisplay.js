import { StyleSheet, View, Text } from 'react-native';
import Colors from '../constants/Colors';

export const BalanceDisplay = ({ amount, currency }) => {
    return (
        <View style={styles.container}>
            <View style={styles.display}>
                <Text style={styles.amount}>{amount}</Text>
                <Text style={styles.currency}>{currency}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }, 
    display: {
        width: 130,
        height: 130,
        flexDirection: 'row',
        backgroundColor: Colors.primary,
        borderRadius: 90,
        alignItems: 'center',
        justifyContent: 'center',
    },
    amount: {
        color: Colors.positive,
        fontSize: 45
    },
    currency: {
        color: Colors.accent1,
        fontSize: 15,
        marginLeft: 5
    },
});

