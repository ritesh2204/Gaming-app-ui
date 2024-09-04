import { Image, useWindowDimensions } from "react-native";

const Banner = () => {
    const { width } = useWindowDimensions();
    const imageHeight = (width * 8) / 16;
    return (
        <Image
            source={require('../assets/images/banner.png')}
            style={{ width: '100%', height: imageHeight, resizeMode: "contain" }}
        />
    );
}
export default Banner;
