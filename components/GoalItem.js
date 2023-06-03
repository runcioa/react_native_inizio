import { View, Text, StyleSheet, Pressable } from 'react-native';

const GoalItem = (props) => {

	return (

		<View
			style={styles.goalItem}
		>
			<Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
				<Text
					style={styles.goalText}
				>{props.text}</Text>
			</Pressable>
		</View>

	);

};

export default GoalItem;

const styles = StyleSheet.create({
	goalItem: {
		backgroundColor: '#5e0acc',
		borderRadius: 6,
		marginBottom: 8,

		borderColor: 'black',
		borderWidth: 1,
		color: 'white'
	},
	goalText: {
		color: 'white',
		padding: 10,
	}
});
