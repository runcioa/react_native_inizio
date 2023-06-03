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
        <Modal>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder='Your course goal!'
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <Button title='Add Goal' onPress={addGoalHandler} />
            </View>
        </Modal>

    )

}

export default GoalInput;


const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: 'black'
    },
    textInput: {
        borderColor: 'black',
        borderWidth: 1,
        padding: 3,
        width: '70%',
        marginRight: 8
    },
});