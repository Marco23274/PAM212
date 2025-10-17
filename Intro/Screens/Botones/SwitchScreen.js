
import React, { useState } from 'react'
import { View, Switch, StyleSheet } from 'react-native'

export default function SwitchScreen({ temporal = false, isButton = false, onChange }) {
  const [value, setValue] = useState(temporal)

  const toggle = (v) => {
    setValue(v)
    if (typeof onChange === 'function') onChange(v)
  }

  return (
    <View style={styles.wrapper}>
      <Switch value={value} onValueChange={isButton ? toggle : undefined} />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: { justifyContent: 'center', alignItems: 'center' }
})