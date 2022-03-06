import { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';
import Icon from 'react-native-vector-icons/AntDesign';
import { MyModal } from './MyModal';

export const TransactionCard = ({ values, currency, confirmDelete }) => {
    const [editModalVisible, setEditModalVisible] = useState(false);
    const description = values.description;
    const amount = values.amount;
    const date = values.date;

    let symbol;
    if (amount > 0) symbol = "+";

    let amountText = styles.positiveAmount;
    let icon = <Icon name='rightcircle' style={styles.iconStyle}/>;
    
    if (amount < 0) {
        amountText = styles.negativeAmount;
        icon = <Icon name='leftcircle' style={styles.iconStyle}/>;
    };

    let editModal = null;
    if (editModalVisible) {
        editModal = 
            <MyModal 
                setModalVisible={setEditModalVisible}
                modalVisible={editModalVisible}
                onSave={() => console.log('Editado')}
                currency={currency}
                title={"Editar movimiento"}
                values={values}
            />
    }

    return (
        <View>
            <TouchableOpacity style={styles.container} onLongPress={confirmDelete} onPress={() => setEditModalVisible(true)}>
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
            {editModal}
        </View>
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