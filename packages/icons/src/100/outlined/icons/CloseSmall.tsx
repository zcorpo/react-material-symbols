import type { SVGProps, JSX } from 'react'

export default function CloseSmall({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m307-290-17-17 173-173-173-172 17-17 173 173 172-173 17 17-173 172 173 173-17 17-172-173-173 173Z" />
    </svg>
  )
}
