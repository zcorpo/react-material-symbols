import type { SVGProps, JSX } from 'react'

export default function CloseSmallFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m322.13-299.08-23.05-22.77L456.95-480 299.08-637.92l23.05-22L480-502.16l157.64-157.76 22.28 22L502.05-480l157.87 158.15-22.28 22.77L480-456.84 322.13-299.08Z" />
    </svg>
  )
}
