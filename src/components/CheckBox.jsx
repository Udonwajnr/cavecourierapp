import { View, Text,Pressable,StyleSheet, } from 'react-native'
import React,{useState} from 'react'
import { Ionicons } from '@expo/vector-icons';

const CheckBox = () => {
  const [checked, setChecked] = useState(false);
  return (
    <Pressable
      style={[styles.checkboxBase, checked && styles.checkboxChecked]}
      onPress={() => setChecked(!checked)}>
      {checked && <Ionicons name="checkmark" size={15} color="white" />}
    </Pressable>
  )
}

export default CheckBox

const styles = StyleSheet.create({
  checkboxBase: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#E9E9EA',
    backgroundColor: '#E9E9EA',
  },
  checkboxChecked: {
    backgroundColor: '#2EC76D',
    borderColor: '#2EC76D',
    
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