import type { SVGProps } from 'react'

export default function SplitscreenLandscapeFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M510-285.09h244.91v-389.82H510v389.82Zm-304.91 0H450v-389.82H205.09v389.82ZM65.87-145.87V-814.7H894.7v668.83H65.87Z" />
    </svg>
  )
}
