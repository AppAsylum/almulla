import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const backIcon = require('../assets/icons/left.png');
const threedotIcon = require('../assets/icons/dots.png');
const infoIcon = require('../assets/icons/info.png');
const downIcon = require('../assets/icons/down.png');

const {width, height} = Dimensions.get('window');

const ForeignConverterScreen = ({navigation}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <View
        style={{
        //   backgroundColor: 'red',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity onPress={() => navigation.pop()}>
          <Image
            source={backIcon}
            style={{
              height: 27,
              width: 27,
            }}
          />
        </TouchableOpacity>

        <Text
          style={{
            fontSize: 23,
            alignSelf: 'center',
            fontWeight: '500'
          }}>
          Foreign Converter
        </Text>

        <TouchableOpacity>
          <Image
            source={threedotIcon}
            style={{
              height: 27,
              width: 27,
            }}
          />
        </TouchableOpacity>
      </View>

      <View
      style={{
        marginTop: 30,
        backgroundColor: '#A7ACB1',
        height: 56,
        width: width - 20,
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 10
      }}
      >
        <Text
        style={{
            color: 'white',
            marginLeft: 20
        }}
        >Remaining purchase limit</Text>

        <View
        style={{
            flexDirection: 'row',
            gap: 5,
            marginRight: 20
        }}
        >
            <Text
            style={{
                color: 'white',
                fontSize: 15
            }}
            >100</Text>

            <Image 
            tintColor={'white'}
            source={infoIcon}
            style={{
                height: 20,
                width: 20
            }}
            />
        </View>
      </View>


      <View
      style={{
        height: 298,
        width: width -30,
        marginTop: 25,
        alignSelf: 'center',
        backgroundColor: '#198754',
        borderRadius: 10

      }}
      >

        <View>
        <Text
        style={{
            marginTop: 20,
            marginLeft: 20,
            fontSize: 15,
            color: 'white'
        }}
        >From</Text>

        <View
        style={{
            marginTop: 10,
            marginLeft: 20,
            flexDirection: 'row',
            // backgroundColor: 'red',
            width: 55,
            justifyContent: 'space-between',
            alignItems: 'center'
        }}
        >
            <Text
            style={{
                color: 'white',
                fontSize: 15
            }}
            >THB</Text>

            <TouchableOpacity>
            <Image
            tintColor={'white'} 
            source={downIcon}
            style={{
                height: 15,
                width: 15
            }}
            />
            </TouchableOpacity>
        </View>
        </View>


        <View
        style={{
            marginTop: 80
        }}
        >
        <Text
        style={{
            marginTop: 20,
            marginLeft: 20,
            fontSize: 15,
            color: 'white'
        }}
        >To</Text>

        <View
        style={{
            marginTop: 10,
            marginLeft: 20,
            flexDirection: 'row',
            // backgroundColor: 'red',
            width: 55,
            justifyContent: 'space-between',
            alignItems: 'center'
        }}
        >
            <Text
            style={{
                color: 'white',
                fontSize: 15
            }}
            >IDR</Text>

            <TouchableOpacity>
            <Image
            tintColor={'white'} 
            source={downIcon}
            style={{
                height: 15,
                width: 15
            }}
            />
            </TouchableOpacity>
        </View>
        </View>
        <View>

        </View>


        <TouchableOpacity
        style={{
            marginTop: 15,
            height: 56,
            width: width - 60,
            borderRadius: 8,
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#10C26F'
        }}
        >
            <Text
            style={{
                color: 'white'
            }}
            >Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ForeignConverterScreen;

const styles = StyleSheet.create({});
