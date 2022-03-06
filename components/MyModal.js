import { useState } from "react";
import { Button, TextInput, View, StyleSheet, Modal, Text } from "react-native";
import Colors from "../constants/Colors";

export const MyModal = ({ onSave, setModalVisible, modalVisible, currency, title, values }) => {
    const [description, setDescription] = useState(values.description);
    const [amount, setAmount] = useState((values.amount).toString());
    const [date, setDate] = useState(values.date);

    const descriptionHandler = (text) => {
        setDescription(text);
    };

    const amountHandler = (amount) => {
        setAmount(amount);
    };

    const dateHandler = (text) => {
        setDate(text);
    };

    const resetAndCloseModal = () => {
        setDescription();
        setAmount();
        setDate();
        setModalVisible(false);
    };

    const validateTransaction = () => {
        onSave({ description, amount: parseFloat(amount), date });
        resetAndCloseModal();
    };

    return (
        <Modal visible={modalVisible} animationType={'fade'} transparent={true}>
            <View style={styles.modalBackground}>
                <View style={styles.modalContainer}>
                    <Text style={styles.modalTitle}>{title}</Text>
                    <TextInput
                        style={styles.description}
                        placeholder="Descripción"
                        placeholderTextColor={Colors.accent3}
                        value={description}
                        onChangeText={descriptionHandler}
                        maxLength={30}
                        multiline={true}
                    />
                    <View style={{flexDirection: 'row'}}>
                        <TextInput
                            style={styles.amount}
                            placeholder={"Cantidad (" + currency + ")"}
                            placeholderTextColor={Colors.accent3}
                            value={amount}
                            keyboardType={'numeric'}
                            onChangeText={amountHandler}
                        />
                        <TextInput
                            style={styles.date}
                            placeholder="Fecha"
                            placeholderTextColor={Colors.accent3}
                            value={date}
                            onChangeText={dateHandler}
                            maxLength={10}
                        />
                    </View>

                    <View style={styles.buttonsContainer}>
                        <View style={styles.button}>
                            <Button
                                title="Cancelar"
                                color={Colors.accent3}
                                onPress={() => resetAndCloseModal()}
                            />
                        </View>
                        <View style={styles.button}>
                            <Button
                                title="Guardar"
                                color={Colors.accent3}
                                onPress={() => validateTransaction()}
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
        borderRadius: 10,
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
        width: 210,
        height: 60,
        margin: 5,
        textAlign: "center",
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderRadius: 5,
        backgroundColor: Colors.accent2,
        color: Colors.secondary,
    },
    amount: {
        width: 100,
        height: 40,
        margin: 5,
        textAlign: "center",
        borderRadius: 5,
        backgroundColor: Colors.accent2,
        color: Colors.secondary,
    },
    date: {
        width: 100,
        height: 40,
        margin: 5,
        textAlign: "center",
        borderRadius: 5,
        backgroundColor: Colors.accent2,
        color: Colors.secondary,
    }, 
    buttonsContainer: {
        width:'100%',
        flexDirection: 'row',
        marginTop: 10
    },
    button: {
        width: 100,
        marginHorizontal: 5,
        marginTop: 10,
    }
});
