
import MainPage from '@/components/ui/MainPage'
import React from 'react'
import { StyleSheet,SafeAreaView } from 'react-native'

const _layout = () => {
  return (
    <SafeAreaView style ={styles.container}>
      <MainPage></MainPage>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor : 'rgb(228, 234, 255)'
  },
});

export default _layout
