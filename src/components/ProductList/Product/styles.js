import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
    	backgroundColor: '#fff',
    	borderRadius: 3,
    	marginBottom: 15,
    	shadowColor: '#C0C0C0',
    	shadowRadius: 2,
    	shadowOpacity: 0.1,
    	shadowOffset: {
    		width: 0,
    		height: 0
    	},
    	width: (width - 45) / 2,

    },

    image: {
    	width: '100%',
    	height: 100,
    	resizeMode: 'contain', //espreme a imagem ate ela caber sem distoercer
    },

    title: {
    	textAlign: 'center',
    	fontWeight: 'bold',
    	color: '#111',
    },

    description: {
    	textAlign: 'center',
    	color: '#333',
    	fontSize: 11
    },

    price : {
    	textAlign: 'center',
    	color: '#C0C0C0',
    	fontSize: 14,
    	marginTop: 5
    },

    infoContainer: {
    	borderTopWidth: 1,
    	borderColor: '#eee',
    	padding: 15,
    },
    imageContainer: {
    	padding: 15,
    },

    checkIcon: {
    	position: 'absolute',
    	right: 15,
    	top: 15,
    	color: '#FF9982',
    	zIndex: 1,
    }

});

export default styles;