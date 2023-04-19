// @ts-nocheck
const path = require('path');
const fs = require('fs');

const filePaths = [];

const writeToFile = () => {
    const imports = `${filePaths
        .map((icon) => `import ${icon.exportName} from './svg/${icon.baseName}';`)
        .join('\n')}`;
    const allIcons = `<div style={{ display: 'flex', flexWrap: 'wrap', fontSize: parentFontSize, gap: '4.5rem', maxWidth: 800, color: colors[color as Colors] }}>\n${filePaths
        .map(
            (icon) =>
                `  <div style={{ textAlign: 'center'}}><${icon.exportName}/><Typography variant="caption" color="blackBrand" textAlign="center">${icon.exportName}</Typography></div>`,
        )
        .join('\n')}\n</div>`;

    const fileContent = `${imports}\nimport colors from '../theme/configs/colors';\nimport Typography from '../atoms/Typography';
\n
export default {
    title: 'Icons',
    argTypes: {
        parentFontSize: {
            control: {
                type: 'number',
            },
            defaultValue: 20,
        },
        color: {
            control: {
                type: 'select',
            },
            defaultValue: 'blueBrand',
            options: Object.entries(colors).map(([name]) => name),
        },
    }
}

type Colors = keyof typeof colors;

export const AllIcons = ({ parentFontSize, color }: any) => (\n
${allIcons}
)
`;

    fs.writeFile(`${__dirname}/icons/Icons.stories.tsx`, fileContent, (err) => {
        // eslint-disable-next-line no-console
        if (err) console.log({ err });
    });
};
/**
 * @param {string[]} filePaths
 */
fs.readdir(`${__dirname}/icons/svg`, (err, files) => {
    if (err) {
        // eslint-disable-next-line no-console
        return console.log(`error: ${err}`);
    }
    // eslint-disable-next-line array-callback-return
    files.map((filePath) => {
        const baseName = path.basename(filePath, path.extname(filePath));

        if (baseName === 'index') return;

        const exportName = /^\d/.test(baseName) ? `Svg${baseName}Icon` : `${baseName}Icon`;

        filePaths.push({ baseName, exportName });
    });

    writeToFile();

    return null;
});
