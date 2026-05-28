import type { SVGProps, JSX } from 'react'

export default function NearMeFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M496-95 380-394 81-510v-77l798-306L574-95h-78Z" />
    </svg>
  )
}
