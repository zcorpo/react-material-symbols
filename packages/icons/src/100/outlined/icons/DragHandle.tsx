import type { SVGProps, JSX } from 'react'

export default function DragHandle({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M212-395v-22h536v22H212Zm0-148v-22h536v22H212Z" />
    </svg>
  )
}
