import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';

export default function App() {
	return (
		<View 
		style={{ 
			padding: 0, 
			flexDirection: 'row', 
			width:'90%',
			height:800, 
			justifyContent: 'space-between',
			alignItems: 'center'  
			}}>
			<View style={{ 
				backgroundColor: 'red', 
				flex: 1, 
				// height: 100,
				// width: 100,
				justifyContent: 'center', 
				alignItems: 'center' }}>
				<Text>1</Text>
			</View>
			<View style={{ 
				backgroundColor: 'green', 
				flex: 2, 
				// height: 100,
				// width: 100,
				justifyContent: 'center', 
				alignItems: 'center' }}>
				<Text>1</Text>
			</View>
			<View style={{ 
				backgroundColor: 'blue', 
				flex: 1, 
				// height: 100,
				// width: 100,
				justifyContent: 'center', 
				alignItems: 'center' }}>
				<Text>1</Text>
			</View>
		</View>
	);
}
