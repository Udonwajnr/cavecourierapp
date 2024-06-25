import { View, Text,Pressable,StyleSheet, } from 'react-native'
import React,{useState} from 'react'
import { Ionicons } from '@expo/vector-icons';

const RoundedCheckBox = () => {
  const [checked, setChecked] = useState(false);
  return (
    <Pressable
      style={styles.checkboxBase}
      onPress={() => setChecked(!checked)}>
      {checked && <View style={[checked && styles.checkboxChecked]} className="w-4 h-4"></View> }
    </Pressable>
  )
}

export default RoundedCheckBox

const styles = StyleSheet.create({
  checkboxBase: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#2EC76D',
    backgroundColor: 'white',
    padding:1
  },

  checkboxChecked: {
    backgroundColor: '#2EC76D',
    borderColor: '#2EC76D',
    borderRadius: 50

  },

  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxLabel: {
    marginLeft: 8,
    fontWeight: '500',
    fontSize: 18,
  },
});