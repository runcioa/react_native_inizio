import { View, Text, StyleSheet, Pressable } from 'react-native';

const GoalItem = (props) => {

	return (
		<Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
			<View
				style={styles.goalItem}
			>
				<Text
					style={styles.goalText}
				>{props.text}</Text>
			</View>
		</Pressable>

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
