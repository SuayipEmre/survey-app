import { Path, Svg } from "react-native-svg"
import { IconsPropsType } from "./types";


const ClockIcon: React.FC<IconsPropsType> = ({ size, color }) => {
    return (
        <Svg width={size} height={size} viewBox="0 0 13 13" fill="none">
            <Path d="M0.875 6.5C0.875 7.23869 1.02049 7.97014 1.30318 8.65259C1.58586 9.33505 2.00019 9.95515 2.52252 10.4775C3.04485 10.9998 3.66495 11.4141 4.34741 11.6968C5.02986 11.9795 5.76131 12.125 6.5 12.125C7.23869 12.125 7.97014 11.9795 8.65259 11.6968C9.33505 11.4141 9.95515 10.9998 10.4775 10.4775C10.9998 9.95515 11.4141 9.33505 11.6968 8.65259C11.9795 7.97014 12.125 7.23869 12.125 6.5C12.125 5.00816 11.5324 3.57742 10.4775 2.52252C9.42258 1.46763 7.99184 0.875 6.5 0.875C5.00816 0.875 3.57742 1.46763 2.52252 2.52252C1.46763 3.57742 0.875 5.00816 0.875 6.5Z" stroke="#0300A3" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M6.5 3.375V6.5L8.375 8.375" stroke={color} stroke-linecap="round" stroke-linejoin="round" />
        </Svg>

    )
}
export default ClockIcon