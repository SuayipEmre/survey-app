import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { IconsPropsType } from './types';

const LeftArrowIcon : React.FC<IconsPropsType>= ({ size, color }) => {
  return (
    <View>
      <Svg width={size} height={size} viewBox="0 0 16 16" fill="none">
        <Path
          d="M15 7.00004H3.82999L8.70999 2.12004C9.09999 1.73004 9.09999 1.09004 8.70999 0.700037C8.61747 0.607333 8.50758 0.533785 8.38661 0.483604C8.26564 0.433422 8.13595 0.407593 8.00499 0.407593C7.87402 0.407593 7.74433 0.433422 7.62336 0.483604C7.50239 0.533785 7.3925 0.607333 7.29999 0.700037L0.709986 7.29004C0.617282 7.38255 0.543735 7.49244 0.493553 7.61341C0.443372 7.73439 0.417542 7.86407 0.417542 7.99504C0.417542 8.12601 0.443372 8.25569 0.493553 8.37666C0.543735 8.49763 0.617282 8.60752 0.709986 8.70004L7.29999 15.29C7.39257 15.3826 7.50248 15.4561 7.62344 15.5062C7.74441 15.5563 7.87406 15.5821 8.00499 15.5821C8.13592 15.5821 8.26556 15.5563 8.38653 15.5062C8.50749 15.4561 8.6174 15.3826 8.70999 15.29C8.80257 15.1975 8.87601 15.0875 8.92611 14.9666C8.97622 14.8456 9.00201 14.716 9.00201 14.585C9.00201 14.4541 8.97622 14.3245 8.92611 14.2035C8.87601 14.0825 8.80257 13.9726 8.70999 13.88L3.82999 9.00004H15C15.55 9.00004 16 8.55004 16 8.00004C16 7.45004 15.55 7.00004 15 7.00004Z"
          fill={color}
        />
      </Svg>
    </View>
  );
};

export default LeftArrowIcon;