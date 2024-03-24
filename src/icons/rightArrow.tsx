import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconsPropsType } from './types';

const RightArrowIcon :  React.FC <IconsPropsType>= ({size, color}) => {
    return (
      <Svg width={size} height={size} viewBox="0 0 6 9" fill="none">
        <Path d="M0.916626 8.45874L4.87496 4.50041L0.916626 0.542074" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
      </Svg>
    );
  }


export default RightArrowIcon;
