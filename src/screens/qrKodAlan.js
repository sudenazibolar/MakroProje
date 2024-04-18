import React from 'react';

import { Image, SafeAreaView, Text, View, } from 'react-native';

const QrKodAlan = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={{ padding: 24 }}>
        <Image source={require('../icons/Makroaltut.png')} style={{ width: 198, height: 36 }} />
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
        <Image source={require('../icons/restaurant.png')} style={{ height: 105, width: 143, marginTop: 10 }} />
      </View>

      <View style={{ marginTop: 40, alignItems: 'center' }}>

        <View>
          <Image source={require('../icons/yazi.png')} style={{}} />
        </View>


        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 50 }}>

          <View style={{ flex: 1, borderWidth: 3.5, borderColor: '#F4690B', backgroundColor: '#F4690B' }}></View>

          <View style={{ borderWidth: 7, borderRadius: 5, borderColor: '#F4690B', justifyContent: 'center', alignItems: 'center', width: 190, height: 190 }}>
            <Image source={require('../icons/Vector.png')} style={{ height: 130, width: 130, marginTop: 7 }} />
            <Text style={{ color: 'black', fontSize: 11, paddingVertical: 4, marginTop: 2 }}>www.pasabahcerestaurant.com</Text>
          </View>
          <View style={{ flex: 1, borderWidth: 3.5, borderColor: '#F4690B', backgroundColor: '#F4690B' }}></View>


        </View>



      </View>















      <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center', marginBottom: 20 }}>
        <View style={{ justifyContent: 'center', alignItems: 'center', borderRadius: 42, width: 84, height: 84, borderColor: '#000', borderWidth: 4, }}>
          <View style={{ justifyContent: 'center', alignItems: 'center', borderRadius: 30, width: 60, height: 60, borderColor: '#000', borderWidth: 4, }}>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default QrKodAlan;