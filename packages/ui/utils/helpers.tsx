export const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

    return result
        ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
        : null;
};

export const rgbToHex = (rgb: string) => {
    const rgbArr: string[] = rgb.split(/\D{1,}/g);
    rgbArr.shift();
    rgbArr.pop();

    const r = parseInt(rgbArr[0], 10);
    const g = parseInt(rgbArr[1], 10);
    const b = parseInt(rgbArr[2], 10);

    return `#${[r, g, b]
        .map((x) => {
            const hex = x.toString(16);
            return hex.length === 1 ? `0${hex}` : hex;
        })
        .join('')}`;
};
