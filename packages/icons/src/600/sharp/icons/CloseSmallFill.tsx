import type { SVGProps, JSX } from 'react'

export default function CloseSmallFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m327.72-271.87-55.85-55.56L423.59-480 271.87-631.57l55.85-55.56L480-535.52l151.28-151.61 55.85 55.56L535.41-480l151.72 152.57-55.85 55.56L480-423.48 327.72-271.87Z" />
    </svg>
  )
}
