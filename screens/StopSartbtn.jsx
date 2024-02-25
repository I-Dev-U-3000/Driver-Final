import React, { useRef, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';
import * as Animatable from 'react-native-animatable';

export const screenWidth = Dimensions.get('window').width;
let componentWidth = screenWidth;

const StopSartbtn = props => {
  const [activeIndex, setActiveIndex] = useState(0);
  const updateIndex = () => {
    if (activeIndex === 0) {
      slideRight();
      setActiveIndex(1);
    } else {
      slideLeft();
      setActiveIndex(0);
    }
  };

  const handleViewRef = useRef(null);

  const slideRight = () =>{ 
    handleViewRef.current.animate({
      0: {
        translateX: 0,
      },
      0.5: {
        translateX: 100,
      },
      1: {
        translateX: componentWidth / 2 - 5,
      },
    })
    console.log("I am start");
};

    const slideLeft = () =>{ 
        handleViewRef.current.animate({
        0: {
            translateX: componentWidth / 2 - 5,
        },
        0.5: {
            translateX: componentWidth / 4,
        },
        1: {
            translateX: 0,
        },
        })
    console.log("I am stop");
    };

  return (
    <TouchableWithoutFeedback onPress={updateIndex}>
      <View
        style={styles.backgroundSwitch}
        onLayout={event => {
          componentWidth = event.nativeEvent.layout.width;
        }}
      >
        <Animatable.View
          duration={500}
          style={styles.buttonSwitch}
          ref={handleViewRef}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Text style={[styles.textOption]}>ခရီးရှိနေသည်</Text>
          <Text style={[styles.textOption]}>ခရီးမရှိပါ</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  backgroundSwitch: {
    backgroundColor: 'orange',
    height: 50,
    borderRadius: 100,
    justifyContent: 'center',
  },
  textOption: {
    width: '50%',
    textAlign: 'center',
  },
  buttonSwitch: {
    position: 'absolute',
    backgroundColor: 'white',
    height: '80%',
    width: '48%',
    borderRadius: 100,
    left: '2%',
    right: '2%',
  },
});

export default StopSartbtn;
