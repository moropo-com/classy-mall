import React from "react";
import Svg, { G } from "react-native-svg";
import { ISvgComponentProps } from "../types";
import Animated, {
  useAnimatedProps,
  useSharedValue,
} from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

const AnimatedG = Animated.createAnimatedComponent(G);

const SvgComponent = ({ layout, children, viewBox }: ISvgComponentProps) => {
  const offset = useSharedValue({ x: 0, y: 0 });
  const start = useSharedValue({ x: 0, y: 0 });
  const panGesture = Gesture.Pan()
    .onUpdate((e) => {
      const newX = e.translationX + start.value.x;
      const newY = e.translationY + start.value.y;
      offset.value = {
        x: Math.abs(newX) < layout.width / 4 ? newX : offset.value.x,
        y: Math.abs(newY) < layout.height / 4 ? newY : offset.value.y,
      };
    })
    .onEnd(() => {
      start.value = {
        x: offset.value.x,
        y: offset.value.y,
      };
    });

  const scale = useSharedValue(1);
  const savedScale = useSharedValue(1);
  const pinchGesture = Gesture.Pinch()
    .onUpdate((e) => {
      const newScale = savedScale.value * e.scale;
      if (newScale < 2 && newScale > 1 / 2) scale.value = newScale;
    })
    .onEnd(() => {
      savedScale.value = scale.value;
    });

  const composed = Gesture.Simultaneous(panGesture, pinchGesture);
  const animatedProps = useAnimatedProps(() => ({
    x: offset.value.x,
    y: offset.value.y,
    scale: scale.value,
  }));

  return (
    <GestureDetector gesture={composed}>
      <Svg width={layout.width} height={layout.height} viewBox={viewBox}>
        <AnimatedG animatedProps={animatedProps} fill={"black"}>
          {children}
        </AnimatedG>
      </Svg>
    </GestureDetector>
  );
};

export default SvgComponent;
