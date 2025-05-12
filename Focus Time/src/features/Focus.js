import React, { useState } from 'react'
import { View, Text, StyleSheet} from 'react-native'
import { TextInput } from 'react-native-paper'
import { RoundedButton } from '../components/RoundedButton'
import { spacing } from '../utils/sizes'


export const Focus = ({ addSubject }) => {

    const [subject, setSubject] = useState()

    return <View style={styles.container}>
        <View style={styles.inputContainer}>
        <TextInput label={'What would you like to focus on ?'} value={subject}
        onChangeText={(text)=>setSubject(text)} style={styles.textInput} />
            <View style={styles.button}>
                <RoundedButton title='+' size={50} onPress={()=>addSubject(subject)}  />
            </View>
        </View>
    </View>
}

const styles = StyleSheet.create({
    container : {
        // flex : 0.1 without flex is should take place that it need 
        marginTop : 30
    },
    inputContainer : {
        padding : spacing.lg,
        justifyContent : 'top',
        flexDirection : 'row'
    },
    textInput : {
        flex : 1,
        marginRight : spacing.sm
    },
    button : {
        justifyContent : 'center'
    }
}) 