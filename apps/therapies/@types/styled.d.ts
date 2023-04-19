/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components';

import { Theme } from 'cryo-ui-kit/theme/configs';

declare module 'styled-components' {
    export interface DefaultTheme extends Theme {}
}
