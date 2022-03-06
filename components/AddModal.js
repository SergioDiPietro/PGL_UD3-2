import { useState } from "react";
import { Button, TextInput, View, StyleSheet, Modal, Text } from "react-native";
import Colors from "../constants/Colors";

export const AddBookModal = ({ onAddTransaction, setAddModalVisible, addModalVisible }) => {
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("");

    const descriptionHandler = (text) => {
        setDescription(text);
    };

    const amountHandler = (number) => {
        setAmount(number);
    };

    const resetAndCloseModal = () => {
        setDescription("");
        setAmount("");
        setAddModalVisible(false);
    }

    const validateTransaction = () => {
        onAddTransaction({ description, amount: parseInt(amount) });
        resetAndCloseModal();
    };

    return (
        <Modal visible={addModalVisible} animationType={'fade'} transparent={true}>
            <View style={styles.modalBackground}>
                <View style={styles.modalContainer}>
                    <Text style={styles.modalTitle}>Agregar libro</Text>
                    <TextInput
                        style={styles.description}
                        placeholder="Descripción"
                        value={title}
                        onChangeText={descriptionHandler}
                        maxLength={100}
                    />
                    <TextInput
                        style={styles.amount}
                        placeholder="Cantidad"
                        value={amount.toString()}
                        keyboardType={'numeric'}
                        onChangeText={amountHandler}
                    />

                    <View style={styles.buttonsContainer}>
                        <View style={styles.button}>
                            <Button
                                title="Cancelar"
                                color={Colors.accent2}
                                onPress={resetAndCloseModal}
                            />
                        </View>
                        <View style={styles.button}>
                            <Button
                                title="Guardar"
                                color={Colors.accent2}
                                onPress={validateTransaction}
                            />
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    modalContainer: {
        marginVertical: '50%',
        marginHorizontal: '10%',
        backgroundColor: Colors.primary,
        borderRadius: 20,
        padding: 20,
        alignItems: "center",
    },
    modalTitle: {
        marginBottom: 15,
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.secondary
    },
    description: {
        width: 200,
        height: 200,
        margin: 5,
        textAlign: "center",
        borderRadius: 10,
        backgroundColor: Colors.accent1
    },
    amount: {
        width: 200,
        margin: 5,
        textAlign: "center",
        borderRadius: 10,
        backgroundColor: Colors.accent1
    },
    buttonsContainer: {
        width:'100%',
        flexDirection: 'row',
        marginTop: 10
    },
    button: {
        width: 100,
        marginHorizontal: 10,
        marginTop: 10,
    }
});
