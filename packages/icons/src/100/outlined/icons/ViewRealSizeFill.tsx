import type { SVGProps } from 'react'

export default function ViewRealSizeFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M324-332v-274h-72v-22h94v296h-22Zm143 0v-22h22v22h-22Zm179 0v-274h-71v-22h93v296h-22ZM467-469v-22h22v22h-22Z" />
    </svg>
  )
}
