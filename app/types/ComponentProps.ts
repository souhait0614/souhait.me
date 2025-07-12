import type { JSX } from 'hono/jsx';
import type { AllUnionFields } from 'type-fest';

export type NormalIconProps = JSX.HTMLAttributes;

export interface FillableIconProps extends JSX.HTMLAttributes {
  filled?: boolean;
}

export type IconProps = AllUnionFields<NormalIconProps | FillableIconProps>;
