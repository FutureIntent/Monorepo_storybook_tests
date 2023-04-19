// @ts-nocheck
const path = require('path');
const fs = require('fs');

const filePaths = [];

const writeToFile = () => {
    const imports = `${filePaths
        .map((icon) => `import ${icon.exportName} from './svgColored/${icon.baseName}';`)
        .join('\n')}`;
    const allIcons = `<div style={{ display: 'flex', flexWrap: 'wrap', fontSize: parentFontSize, gap: '4.5rem', maxWidth: 800 }}>\n${filePaths
        .map(
            (icon) =>
                `  <div style={{ textAlign: 'center'}}><${icon.exportName} /><Typography variant="caption" color="blackBrand" textAlign="center">${icon.exportName}</Typography></div>`,
        )
        .join('\n')}\n</div>`;

    const fileContent = `${imports}\nimport Typography from '../atoms/Typography';
\n
export default {
    title: 'Colored Icons',
    argTypes: {
        parentFontSize: {
            control: {
                type: 'number',
            },
            defaultValue: 20,
        },
    }
}

export const AllIcons = ({ parentFontSize }: any) => (\n
${allIcons}
)
`;

    fs.writeFile(`${__dirname}/icons/ColoredIcons.stories.tsx`, fileContent, (err) => {
        // eslint-disable-next-line no-console
        if (err) console.log({ err });
    });
};
/**
 * @param {string[]} filePaths
 */
fs.readdir(`${__dirname}/icons/svgColored`, (err, files) => {
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
