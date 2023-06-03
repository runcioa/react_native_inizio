import { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';


const GoalInput = (props) => {
    const [enteredGoalText, setEnteredGoalText] = useState('');
    const goalInputHandler = (enteredText) => {
        setEnteredGoalText(enteredText);
    }

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }


    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder='Your course goal!'
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>

                    <View style={styles.button}>
                        <Button title='Add Goal' onPress={addGoalHandler} />
                    </View>
                    <View style={styles.button}>
                    <Button title='Cancel' onPress={addGoalHandler} />
                    </View>
                </View>

            </View>
        </Modal>

    )

}

export default GoalInput;


const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        padding: 16
    },
    textInput: {
        borderColor: 'black',
        borderWidth: 1,
        padding: 3,
        width: '100%',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%',
        marginTop: 16
    },
    button: {
        width: '40%',
        marginHorizontal: 8
    }
});