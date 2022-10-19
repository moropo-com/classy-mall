import React, { FC, PropsWithChildren } from "react";
import Svg, { G } from "react-native-svg";
import Animated, {
  useAnimatedProps,
  useSharedValue,
} from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { LayoutRectangle } from "react-native";
import { Button } from "react-native-paper";

const AnimatedG = Animated.createAnimatedComponent(G);

interface IMapWrapper {
  layout: LayoutRectangle;
  viewBox: string;
}
const MapWrapper: FC<PropsWithChildren<IMapWrapper>> = ({
  layout = {},
  children,
  viewBox,
}) => {
  const offset = useSharedValue({ x: 0, y: 0 });
  const start = useSharedValue({ x: 0, y: 0 });
  const scale = useSharedValue(1);
  const savedScale = useSharedValue(1);

  const panGesture = Gesture.Pan()
    .onUpdate((e) => {
      const newX =
        (e.translationX * viewBox.right) / layout.width + start.value.x;
      const newY =
        (((e.translationY * viewBox.bottom) / layout.height + start.value.y) *
          layout.height) /
        viewBox.bottom;

      offset.value = {
        x:
          newX < viewBox.right * 0.5 * scale.value &&
          newX > -viewBox.right * 0.5 * scale.value
            ? newX
            : offset.value.x,
        y:
          newX < viewBox.bottom * scale.value * 0.5 &&
          newX > -viewBox.bottom * scale.value * 0.5
            ? newY
            : offset.value.y,
      };
    })
    .onEnd(() => {
      start.value = {
        x: offset.value.x,
        y: offset.value.y,
      };
    });

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
    <>
      <GestureDetector gesture={composed}>
        <Svg
          width={layout.width}
          height={layout.height}
          viewBox={`${viewBox.left} ${viewBox.top} ${viewBox.right} ${viewBox.bottom}`}
        >
          <AnimatedG animatedProps={animatedProps} fill={"black"}>
            {children}
          </AnimatedG>
        </Svg>
      </GestureDetector>
      <Button
        style={{ position: "absolute", bottom: 0, right: 0 }}
        onPress={() => {
          scale.value = 1;
          offset.value = { x: 0, y: 0 };
          start.value = { x: 0, y: 0 };
          savedScale.value = 1;
        }}
      >
        reset
      </Button>
    </>
  );
};

export default MapWrapper;
