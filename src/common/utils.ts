import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const MAX_WIDTH = 320
const MAX_HEIGHT = 620

export const scale = (size:number) => {
    return size * (width / MAX_WIDTH)
}

export const verticalScale = (size:number) => {
    return size * (height / MAX_HEIGHT)
}