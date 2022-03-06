import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import Colors from '../constants/Colors';
import Icon from 'react-native-vector-icons/AntDesign';

export const TransactionCard = ({ item, currency, confirmDelete }) => {
    const description = item.value.description;
    const amount = item.value.amount;
    const date = item.value.date;

    let symbol;
    if (item.value.amount > 0) symbol = "+";

    let amountText = styles.positiveAmount;
    let icon = <Icon name='rightcircle' style={styles.iconStyle}/>;
    
    if (amount < 0) {
        amountText = styles.negativeAmount;
        icon = <Icon name='leftcircle' style={styles.iconStyle}/>;
    };
    

    return (
        <TouchableOpacity style={styles.container} onLongPress={confirmDelete}>
            <View style={styles.icon}>
                {icon}
            </View>
            <View style={styles.description}>
                <Text style={styles.descriptionText}>{description}</Text>
            </View>
            <View style={styles.amountAndDate}>
                <Text style={amountText}>{symbol}{amount}{currency}</Text>
                <Text style={styles.dateText}>{date}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        height: 50,
        marginBottom: 20
    },
    icon: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    description: {
        flex: 11,
        alignItems: 'center',
        paddingHorizontal: 10,
        flexDirection: 'row',
    },
    amountAndDate: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingHorizontal: 10
    },
    descriptionText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: Colors.secondary
    },
    positiveAmount: {
        fontSize: 15,
        fontWeight: 'bold',
        color: Colors.positive
    },
    negativeAmount: {
        fontSize: 15,
        fontWeight: 'bold',
        color: Colors.negative
    },
    dateText: {
        fontSize: 12,
        color: Colors.secondary
    },
    iconStyle: {
        color: Colors.secondary,
        fontSize: 30
    }
});