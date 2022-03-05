import { StyleSheet, View, Text } from 'react-native';
import Colors from '../constants/Colors';

export const BalanceDisplay = ({ amount, currency }) => {
    let amountStyle;

    amount < 0 ? 
    amountStyle = styles.negativeAmount : 
    amountStyle = styles.positiveAmount

    return (
        <View style={styles.balanceContainer}>
            <View style={styles.display}>
                <Text style={amountStyle}>{amount}</Text>
                <Text style={styles.currency}>{currency}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    balanceContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    }, 
    display: {
        width: 130,
        height: 130,
        flexDirection: 'row',
        backgroundColor: Colors.primary,
        borderRadius: 65,
        alignItems: 'center',
        justifyContent: 'center',
    },
    positiveAmount: {
        color: Colors.positive,
        fontSize: 45
    },
    negativeAmount: {
        color: Colors.negative,
        fontSize: 45
    },
    currency: {
        color: Colors.accent1,
        fontSize: 15,
        marginLeft: 5
    },
});

