import { View, Text, StyleSheet } from 'react-native';

const GoalItem = (props) => {

    return (

        <View
            style={styles.goalItem}
        >
            <Text
                style={styles.goalText}
            >{props.text}</Text>
        </View>

    );

};

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
		backgroundColor: '#5e0acc',
		borderRadius: 6,
		marginBottom: 8,
		padding: 10,
		borderColor: 'black',
		borderWidth: 1,
		color: 'white'
	},
	goalText: {
		color: 'white'
	}
});
