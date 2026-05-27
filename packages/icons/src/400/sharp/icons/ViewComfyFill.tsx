import type { SVGProps } from 'react'

export default function ViewComfyFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M80-510v-290h800v290H80Zm303 350v-290h497v290H383Zm-303 0v-290h243v290H80Z" />
    </svg>
  )
}
