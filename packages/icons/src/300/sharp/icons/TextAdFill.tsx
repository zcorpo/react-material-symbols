import type { SVGProps, JSX } from 'react'

export default function TextAdFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M100-180v-600h760v600H100Zm121.92-129.62h516.16V-355H221.92v45.38Zm0-147.69h516.16v-45.38H221.92v45.38Zm0-147.69h359.16v-45.38H221.92V-605Z" />
    </svg>
  )
}
