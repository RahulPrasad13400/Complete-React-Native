import { View, Text, StyleSheet, FlatList } from 'react-native'
import { colors } from "../utils/colors"
import { fontSizes, spacing } from "../utils/sizes"

export default function FocusHistory({history}) {

  if(!history || !history.length) return <Text style={styles.item}>We haven't focused on anything</Text>

  const renderItem = ({ item, index }) => {
    return <Text style={styles.item}>{index+1}. {item}</Text>
  }

  return (
    <View style={styles.container}>

     <Text style={styles.title}>
      Things we've focused on : 
     </Text> 

     <FlatList data={history} renderItem={renderItem}/>

    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        padding : spacing.md,
        flex : 1
    },
    item : {
        fontSize : fontSizes.md,
        color : colors.white,
        paddingTop : spacing.md
    },
    title : {
        color : colors.white,
        fontSize : fontSizes.md,
        fontWeight : 'bold'
    }
})
