import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
    	backgroundColor: 'rgba(255, 255, 255,0.5)',
    	height: 50,
    	flexDirection: 'row',
    	borderTopWidth: 1,
    	borderColor: '#eee',
    	justifyContent: 'space-around',
    	alignItems: 'center',
    },

    icon: {
    	color: '#C0C0C0',
    },

    active: {
    	color: '#FF9982'
    },

    main: {
    	width: 40,
    	height: 40,
    	borderRadius: 20,
    	backgroundColor: '#FF9982',
    	justifyContent: 'center',
    	alignItems: 'center'
    },

    mainIcon: {
    	color: '#fff',
    }
});
export default styles;