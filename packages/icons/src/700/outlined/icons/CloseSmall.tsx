import type { SVGProps, JSX } from 'react'

export default function CloseSmall({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m321-255-66-66 158-159-158-158 66-66 159 158 158-158 66 66-158 158 158 159-66 66-158-158-159 158Z" />
    </svg>
  )
}
