import { useState } from 'react';
import { StyleSheet, View, FlatList, TouchableOpacity, Text } from 'react-native';
import Colors from './constants/Colors';
import { BalanceDisplay } from './components/BalanceDisplay';
import { TransactionCard } from './components/TransactionCard';

export default function App() {
    const [amount, setAmount] = useState(0);
    const [transactionList, setTransactionList] = useState([]);
    const [addModalVisible, setAddModalVisible] = useState(false);

    return (
        <View style={styles.mainContainer}>
            <View style={styles.balanceContainer}>
                <BalanceDisplay amount={amount} currency={"EUR"} />
            </View>
            <View style={styles.transactionListContainer}>
                <FlatList style={styles.list} data={transactionList} renderItem={itemList => (
                    <TransactionCard
                        item={itemList.item}
                    />
                )} />
            </View>
            <TouchableOpacity style={styles.addButton} onPress={() => setAddModalVisible(true)}>
                <Text style={styles.addIcon}>+</Text>
            </TouchableOpacity>
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
        width: '95%'
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
