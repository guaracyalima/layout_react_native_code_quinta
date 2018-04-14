import { StyleSheet } from 'react-native';
import { Platform } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: 64,
        paddingTop: 15,
        paddingHorizontal: 15,
        borderBottomWidth: 1,
        borderColor: '#eee',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    icons: {
    	color: '#FF9982'
    },
    title: {
    	fontSize: 16
    }
});

export default styles;
