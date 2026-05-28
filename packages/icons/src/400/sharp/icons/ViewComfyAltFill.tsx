import type { SVGProps, JSX } from 'react'

export default function ViewComfyAltFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M80-560v-320h320v320H80Zm0 480v-320h320v320H80Zm480-480v-320h320v320H560Zm0 480v-320h320v320H560Z" />
    </svg>
  )
}
