import React from 'react';
import {  ActivityIndicator, StyleSheet, Text, View } from 'react-native';


function Loading() {
    return (
        <View style={styles.loadingView}>
            <ActivityIndicator size='large' color='#5637DD' />
            <Text style={styles.loadingText}>Loading . . .</Text>
        </View>
    );
}

const styles = StyleSheet.create(
    {
        loadingView: {
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1
        },
        loadingText: {
            color: '#5637DD',
            fontSize: 14,
            fontWeight: 'bold'
        }
    }
);

export default Loading;

// no redux
// export default COMPONENT_NAME

// with redux
// just reading from redux store
// export default connect(mapStateToProps)(COMPONENT_NAME)

// with redux
// just writing to redux store
// export default connect(null, mapDispatchToProps)(COMPONENT_NAME)

// with redux
// both reading and writing from/to redux store
// export default connect(mapStateToProps, mapDispatchToProps)(COMPONENT_NAME)