import { StyleSheet, View, Text } from 'react-native';
import Colors from '../constants/Colors';

export const BalanceDisplay = ({ budget, currency }) => {
    let budgetStyle;

    budget < 0 ? 
    budgetStyle = styles.negativeBudget : 
    budgetStyle = styles.positiveBudget

    return (
        <View style={styles.balanceContainer}>
            <View style={styles.display}>
                <Text style={budgetStyle}>{budget}</Text>
                <Text style={styles.currency}>{"\n"}{currency}</Text>
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
    positiveBudget: {
        color: Colors.positive,
        fontSize: 35
    },
    negativeBudget: {
        color: Colors.negative,
        fontSize: 35
    },
    currency: {
        color: Colors.secondary,
        fontSize: 15,
        marginLeft: 5,
        fontWeight: 'bold'
    },
});

