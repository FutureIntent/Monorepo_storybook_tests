// @ts-nocheck
const path = require('path');

/**
 * @param {string[]} filePaths
 */
function defaultIndexTemplate(filePaths) {
    const icons = filePaths.map((filePath) => {
        const baseName = path.basename(filePath, path.extname(filePath));
        const exportName = /^\d/.test(baseName) ? `Svg${baseName}Icon` : `${baseName}Icon`;

        return { baseName, exportName };
    });

    return `${icons
        .map((icon) => `import ${icon.exportName} from './${icon.baseName}';`)
        .join('\n')}
        \n
        export { \n${icons.map((icon) => `${icon.exportName}`).join(',\n')}\n };
        `;
}

module.exports = defaultIndexTemplate;
