import { useState } from 'react';
import { StyleSheet, View, Button, TextInput, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

	
	const [courseGoals, setCourseGoals] = useState([]);

	const addGoalHandler = (enteredGoalText) => {
		setCourseGoals((currentCourseGoal) => [
			...currentCourseGoal, 
			{text: enteredGoalText, id: Math.random().toString()}
		]);
	}

	return (

		<View style={styles.appContainer}>
			
			<GoalInput 
				onAddGoal={addGoalHandler}
			/>



			<View style={styles.goalsContainer}>
				<FlatList
					data={courseGoals}
					keyExtractor={(item, index)=>{
						// console.log(item);
						return item.id;
					}}
					renderItem={(itemData) => {
						return (
							<GoalItem text={itemData.item.text}/>
							)
					}} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
		paddingTop: 50,
		paddingHorizontal: 16,
	},
	
	
	goalsContainer: {
		flex: 4,
		justifyContent: 'center',
		alignItems: 'stretch'
	},
	
});
