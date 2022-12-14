// default로 사용할 theme 정의
import { DefaultTheme } from 'styled-components';

export const rem = (pixelUnit: any) => {
    return (
        parseFloat(pixelUnit) / parseFloat(getComputedStyle(document.documentElement).fontSize) + `rem`
    );
};

export const ellipsis = ({ line = 1 }: { line: number }): string => {
    return `
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: ${line};
    -webkit-box-orient: vertical;
  `;
};

export const fontStyle = ({
        fontSize = 16,
        fontWeight = 400,
        lineHeight = 20,
        letterSpacing = -0.5,
    }: {
    fontSize: number;
    fontWeight: 100 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
    lineHeight: number;
    letterSpacing?: number;
}): string => {
    return `
      font-size: ${rem(fontSize)};
      font-weight: ${fontWeight};
      line-height: ${lineHeight / fontSize};
      letter-spacing: ${letterSpacing}px;
    `;
};

const mainTheme: DefaultTheme = {
    color: {
        base: `rgb(51, 51, 51)`,
        brand: `#5f0080`,
        white: `#ffffff`,
        grey_1: `#b5b5b5`, // before price
        grey_2: `#999999`, // sub title / footer
        grey_3: `#f5f5f5`,
    },
    font: {
        light_16_24: fontStyle({ fontWeight: 300, fontSize: 16, lineHeight: 24 }),
        normal_14_22: fontStyle({ fontWeight: 400, fontSize: 14, lineHeight: 22 }),
        normal_14_18: fontStyle({ fontWeight: 400, fontSize: 14, lineHeight: 22 }),
        normal_16_18: fontStyle({ fontWeight: 400, fontSize: 16, lineHeight: 18 }),
        normal_13_18: fontStyle({ fontWeight: 400, fontSize: 13, lineHeight: 18 }),
        medium_12_13: fontStyle({ fontWeight: 500, fontSize: 12, lineHeight: 13 }),
        medium_28_35: fontStyle({ fontWeight: 600, fontSize: 28, lineHeight: 35 }),
        bold_18_26: fontStyle({ fontWeight: 700, fontSize: 18, lineHeight: 26 }),
        bold_16_26: fontStyle({ fontWeight: 800, fontSize: 16, lineHeight: 26 }),
        normal_10_12: fontStyle({ fontWeight: 400, fontSize: 10, lineHeight: 12 }),
        medium_28_50: fontStyle({ fontWeight: 500, fontSize: 28, lineHeight: 50 }),
        medium_24_34: fontStyle({ fontWeight: 500, fontSize: 24, lineHeight: 34 }),
        bold_13_15: fontStyle({ fontWeight: 700, fontSize: 13, lineHeight: 15 }),
        bold_16_24: fontStyle({ fontWeight: 700, fontSize: 16, lineHeight: 24 }),
    },
    media: {
        xx_small: `screen and (max-width: 280px)`,
        x_small: `screen and (max-width: 320px)`,
        small_ios: `screen and (max-width: 375px)`,
        small: `screen and (min-width: 767px)`,
    },
};

export default mainTheme;