import { StyleSheet, Text, View } from 'react-native';
import {globalStyles} from '../styles/global'


export default function ReviewDetails() {
    return (
        <View style={globalStyles.container} >
            <Text>Review Details Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
    },
  });