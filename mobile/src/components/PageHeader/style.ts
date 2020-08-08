import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        paddingVertical: 40,
        paddingHorizontal: 30,
        backgroundColor: '#8257e5',
    },
    topBarIcon: {
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    topBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        fontFamily: 'Archivo_700Bold',
        color: '#fff',
        fontSize: 24,
        lineHeight: 32,
        maxWidth: 160,
        marginVertical: 40,
    },
});

export default styles;
