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
            normal_14_22: string;
            normal_16_18: string;
            normal_10_12: string;
            normal_13_18: string;
            medium_24_34: string;
            medium_12_13: string;
            medium_28_50: string;
            medium_28_35: string;
            bold_16_26: string;
            bold_13_15: string;
            bold_16_24: string;
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