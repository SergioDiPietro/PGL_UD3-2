import { useState } from 'react';
import { StyleSheet, View, FlatList, TouchableOpacity, Text, Alert } from 'react-native';
import Colors from './constants/Colors';
import { BalanceDisplay } from './components/BalanceDisplay';
import { TransactionCard } from './components/TransactionCard';
import { AddModal } from './components/AddModal';

export default function App() {
    const [budget, setBudget] = useState(0);
    const [transactionList, setTransactionList] = useState([]);
    const [addModalVisible, setAddModalVisible] = useState(false);
    const currency = "€";

    const onAddTransaction = (value) => {
        if (value.amount !== 0) {
            setTransactionList((currentList) => [...currentList, { key: Math.random().toString(), value }]);
            setBudget(budget + value.amount);
        };
    };

    const confirmDelete = (item) => {
        Alert.alert(
            "¿Eliminar este movimiento?", "",
            [
                { text: "Cancelar" },
                { text: "Confirmar", onPress: () => deleteTransaction(item.key) }
            ]
        );
    };

    const deleteTransaction = (key) => {
        setTransactionList((transactionList) => transactionList.filter((transaction) => transaction.key !== key));
    };

    let addModal = null;

    if (addModalVisible) {
        addModal =
            <AddModal
                setAddModalVisible={setAddModalVisible}
                addModalVisible={addModalVisible}
                onAddTransaction={onAddTransaction}
                currency={currency}
            />
    } else addModal = null

    return (
        <View style={styles.mainContainer}>
            <View style={styles.balanceContainer}>
                <BalanceDisplay budget={budget} currency={currency} />
            </View>
            <View style={styles.transactionListContainer}>
                <FlatList style={styles.list} data={transactionList} renderItem={(itemList) => (
                    <TransactionCard
                        item={itemList.item}
                        currency={currency}
                        confirmDelete={() => confirmDelete(itemList.item)}
                    />
                )} />
            </View>
            <TouchableOpacity style={styles.addButton} onPress={() => setAddModalVisible(true)}>
                <Text style={styles.addIcon}>+</Text>
            </TouchableOpacity>

            {addModal}
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: Colors.background,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 40,
        paddingBottom: 10
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
        width: '95%',
        paddingBottom: 20
    },
    list: {
        flex: 1,
        margin: 15
    },
    addButton: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: Colors.secondary,
        position: 'absolute',
        bottom: 20,
        right: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    addIcon: {
        fontSize: 30
    }
});
