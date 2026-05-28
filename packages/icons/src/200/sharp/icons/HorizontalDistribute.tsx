import type { SVGProps, JSX } from 'react'

export default function HorizontalDistribute({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M120-120v-720h40v720h-40Zm324.62-180v-360h70.76v360h-70.76ZM800-120v-720h40v720h-40Z" />
    </svg>
  )
}
