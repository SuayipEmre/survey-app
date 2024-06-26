import React from 'react';

import Svg, { Path } from 'react-native-svg';
import { IconsPropsType } from './types';




export const ProfileIcon : React.FC<IconsPropsType> = ({ color, size }) => {
  return (
      <Svg width={size} height={size} viewBox="0 0 13 13" fill="none">
        <Path
          d="M3.6875 3.0625C3.6875 4.61312 4.94938 5.875 6.5 5.875C8.05062 5.875 9.3125 4.61312 9.3125 3.0625C9.3125 1.51188 8.05062 0.25 6.5 0.25C4.94938 0.25 3.6875 1.51188 3.6875 3.0625ZM11.5 12.125H12.125V11.5C12.125 9.08813 10.1619 7.125 7.75 7.125H5.25C2.8375 7.125 0.875 9.08813 0.875 11.5V12.125H11.5Z"
          fill={color}
        />
      </Svg>
  )
}


