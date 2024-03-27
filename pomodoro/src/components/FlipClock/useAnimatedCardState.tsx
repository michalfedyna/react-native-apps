import {useEffect} from 'react';
import {useSharedValue, withTiming} from 'react-native-reanimated';

import {TimeValue} from './FlipClock';

const ROTATION_TOP = '0deg';
const ROTATION_BOTTOM = '90deg';

const ROTATION_TOP_TARGET = '90deg';
const ROTATION_BOTTOM_TARGET = '0deg';

function useAnimatedCardState({value}: {value: TimeValue}) {
  const rotateTop = useSharedValue(ROTATION_TOP);
  const rotateBottom = useSharedValue(ROTATION_BOTTOM);

  useEffect(() => {
    function rotateTopCallback() {
      'worklet';
      rotateBottom.value = withTiming(ROTATION_BOTTOM_TARGET, {duration: 500});
    }

    rotateTop.value = withTiming(
      ROTATION_TOP_TARGET,
      {duration: 500},
      rotateTopCallback,
    );
  }, [value, rotateTop, rotateBottom]);

  return {rotateTop, rotateBottom};
}

export default useAnimatedCardState;
