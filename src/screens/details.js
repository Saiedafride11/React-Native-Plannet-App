import { SafeAreaView, StyleSheet, ScrollView, View } from 'react-native'
import React from 'react'
import Text from '../components/text/text'
import PlanetHeader from '../components/plannet-header'
import { colors } from '../theme/color'
import { spacing } from '../theme/spacing'

export default function Details({navigation, route}) {
const planet = route.params.planet;
const {name} = planet;

const renderImage = (name) => {
      switch (name) {
            case 'mercury':
                  return <>mercury</>;
            case 'earth':
                  return <>earth</>;
            case 'jupiter':
                  return <>jupiter</>;
            case 'mars':
                  return <>mars</>;
            case 'neptune':
                  return <>neptune</>;
            case 'saturn':
                  return <>saturn</>;
            case 'uranus':
                  return <>uranus</>;
            case 'venus':
                  return <>venus</>;
      }
}
  return (
      <SafeAreaView style={styles.container}>
            <PlanetHeader backBtn={true}/>
            <ScrollView>
                  <View style={styles.imageView}>
                        {renderImage(name)}hi
                  </View>
            </ScrollView>
      </SafeAreaView>
  )
}


const styles = StyleSheet.create({
      container: {
            flex: 1,
            backgroundColor: colors.black
      },
      imageView: {
            padding: spacing[5],
            alignItems: 'center',
            justifyContent: 'center',
            color: "white"
      }
})