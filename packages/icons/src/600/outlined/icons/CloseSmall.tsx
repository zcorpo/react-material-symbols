import type { SVGProps, JSX } from 'react'

export default function CloseSmall({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m311.87-256.3-55.57-55.57L423.87-480 256.3-647.13l55.57-55.57L480-535.13 647.13-702.7l55.57 55.57L535.13-480 702.7-311.87l-55.57 55.57L480-423.87 311.87-256.3Z" />
    </svg>
  )
}
