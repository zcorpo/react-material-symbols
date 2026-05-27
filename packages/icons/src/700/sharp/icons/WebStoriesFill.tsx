import type { SVGProps } from 'react'

export default function WebStoriesFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M700-146v-668h83v668h-83ZM46-63v-834h554v834H46Zm837-168v-499h52v499h-52Z" />
    </svg>
  )
}
