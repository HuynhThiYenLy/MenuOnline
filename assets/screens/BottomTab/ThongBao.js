import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ThongBao = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          Thông báo
        </Text>
      </View>
    </View>
  )
}

export default ThongBao

const styles = StyleSheet.create({
  header: {
    height: 50,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  container: {
    flex: 1,
  }
})