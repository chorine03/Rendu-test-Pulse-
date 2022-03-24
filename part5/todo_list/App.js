import react, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView} from 'react-native';

export default function App() {

const [name, setName]=useState('')
const [myName, setMyName]=useState([])
const textContent = (val) => {
  setName (val)
}
const changeText = () => {
  setMyName ( currentName => [name, ...currentName] )
  setName('')
}



  return (
    <View style={styles.container}>
      <View style={styles.alignText}> 
        <TextInput 
        style={styles.textInput}
        placeholder='write your list'
        onChangeText={textContent}
        value={name}
        />
        <Button 
        title="Valider"
        
        onPress={changeText}

        />
      </View>
      <ScrollView>
        <View style= {styles.vue}>
          {
            myName.map((name, id) => <Text style={styles.textVue} key={id}> { name } </Text>)
          }
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    borderWidth: 1,
    flexGrow: 1
  },
  alignText: {
    flexDirection: "row"
  },
  vue: {
    marginTop: 20
  },
  textVue: {
    backgroundColor: 'cyan',
    padding: 10,
    paddingLeft: 15,
    marginVertical: 9,
  }

});
