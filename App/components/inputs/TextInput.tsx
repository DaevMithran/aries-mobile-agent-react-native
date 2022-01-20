import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput as TI, TextInputProps } from 'react-native'

import { mainColor, textColor, shadow, borderRadius, backgroundColor } from '../../globalStyles'

interface Props extends TextInputProps {
  label: string
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    marginVertical: 10,
  },
  label: {
    color: textColor,
    margin: 2,
  },
  textInput: {
    padding: 10,
    borderRadius,
    fontSize: 16,
    backgroundColor: backgroundColor,
    color: textColor,
    borderWidth: 2,
    borderColor: shadow,
  },
})

const TextInput: React.FC<Props> = ({ label, ...textInputProps }) => {
  const [focused, setFocused] = useState(false)

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TI
        style={[styles.textInput, focused && { borderColor: mainColor }]}
        selectionColor={mainColor}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        {...textInputProps}
      />
    </View>
  )
}

export default TextInput
