import type { SVGProps } from 'react'

export default function ArrowsMoreDownFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M195.22-115.22v-428.13h68.13v360h360v68.13H195.22Zm220.95-220.95v-428.37h68.37v360h360v68.37H416.17Z" />
    </svg>
  )
}
