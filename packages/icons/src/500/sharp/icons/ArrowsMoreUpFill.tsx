import type { SVGProps, JSX } from 'react'

export default function ArrowsMoreUpFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M475.22-195.22v-360h-360v-68.13h428.13v428.13h-68.13Zm220.95-220.95v-360h-360v-68.37h428.37v428.37h-68.37Z" />
    </svg>
  )
}
