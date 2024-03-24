import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { IconsPropsType } from './types';



const HomeIcon : React.FC<IconsPropsType> = ({color, size}) => {
    return (
        <View>
          <Svg width={size} height={size} viewBox="0 0 16 15" fill="none">
            <Path
              d="M6.33329 13.8333V9.66664H9.66663V13.8333C9.66663 14.2916 10.0416 14.6666 10.5 14.6666H13C13.4583 14.6666 13.8333 14.2916 13.8333 13.8333V7.99998H15.25C15.6333 7.99998 15.8166 7.52498 15.525 7.27498L8.55829 0.999976C8.24163 0.716642 7.75829 0.716642 7.44163 0.999976L0.47496 7.27498C0.191626 7.52498 0.366626 7.99998 0.74996 7.99998H2.16663V13.8333C2.16663 14.2916 2.54163 14.6666 2.99996 14.6666H5.49996C5.95829 14.6666 6.33329 14.2916 6.33329 13.8333Z"
              fill={color}
            />
          </Svg>
        </View>
      );
}

export default HomeIcon