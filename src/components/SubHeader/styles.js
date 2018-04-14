import { StyleSheet }  from 'react-native';
const styles = StyleSheet.create({
	container: {
		padding: 15,
		backgroundColor: '#fff',
		borderBottomWidth: 1,
		borderColor: '#eee',
		flexDirection: 'row',
	},
	avatar: {
		width: 68,
		height: 68,
		borderRadius: 34,
		marginRight: 15
	},
	profileInfo: {
		flex: 1,
	},
	name: {
		fontWeight: 'bold',
		fontSize: 16,
		color: '#111',
		marginTop: 5,
	},
	bio: {
		fontSize: 14,
		color: '#999',
		marginTop: 5,
	},
	buttonContainer: {
		flexDirection: 'row',
		marginTop: 10,
	},
	firstButton: {
		marginRight: 10
	}
	    
});

export default styles;