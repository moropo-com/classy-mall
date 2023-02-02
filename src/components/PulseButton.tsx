import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Animated, {
  withTiming,
  useAnimatedStyle,
  useSharedValue,
  Easing,
  interpolate,
  withRepeat,
  cancelAnimation,
} from "react-native-reanimated";
import { colors } from "../constants/colors";

interface IPulseButtonProps {
  shouldPulse: boolean;
  position: string;
  onPress: () => void;
}

const PulseButton = ({ shouldPulse, position, onPress }: IPulseButtonProps) => {
  const pulseValue = useSharedValue(1);

  const pulse = (value) => {
    pulseValue.value = withRepeat(
      withTiming(value, {
        duration: 1000,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      }),
      -1,
      false,
      () => {
        pulseValue.value = 1;
      }
    );
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(pulseValue.value, [0, 1], [0, 0.6]),
      transform: [{ scale: interpolate(pulseValue.value, [0, 1], [1, 0.01]) }],
    };
  });

  useEffect(() => {
    if (shouldPulse) pulse(0);
    else cancelAnimation(pulseValue);
  }, [shouldPulse]);

  return (
    <Animated.View style={[styles.upButton, { opacity: 0.99, zIndex: 10 }]}>
      <Animated.View style={[styles.iconContainer, animatedStyle]} />
      <MaterialIcons
        testID="pulse-button"
        name="chevron-right"
        style={{
          zIndex: 10,
          transform: [{ rotate: position === "left" ? "90deg" : "270deg" }],
        }}
        size={40}
        color="white"
        onPress={onPress}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    position: "absolute",
    backgroundColor: "white",
    zIndex: -1,
    borderRadius: 50,
    height: 50,
    width: 50,
  },
  upButton: {
    backgroundColor: colors.primary,
    height: 50,
    width: 50,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 300,
    right: 5,
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0,
    },
  },
});

export default PulseButton;
