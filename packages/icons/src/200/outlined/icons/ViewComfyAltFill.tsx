import type { SVGProps, JSX } from 'react'

export default function ViewComfyAltFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M120-560v-280h280v280H120Zm0 440v-280h280v280H120Zm440-440v-280h280v280H560Zm0 440v-280h280v280H560Z" />
    </svg>
  )
}
