// type 정의
import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        color: {
            base: string;
            brand: string;
            white: string;
            grey_1: string;
            grey_2: string;
            grey_3: string;
        };
        font: {
            light_16_24: string;
            normal_10_12: string;
            normal_13_18: string;
            medium_24_34: string;
            medium_12_13: string;
            medium_28_50: string;
            bold_18_26: string;
        };
        media: {
            xx_small: string;
            x_small: string;
            small_ios: string;
            small: string;
        };
    }
}