import 'styled-components/native';

import Theme from './theme';

export type ITheme = typeof Theme

declare module 'styled-components/native' {
  export interface DefaultTheme extends ITheme {}
}