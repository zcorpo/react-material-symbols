import type { SVGProps } from 'react'

export default function MmsFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M242.26-396.04h481.48L571-596.61l-126 167-92-113-110.74 146.57ZM65.87-65.87V-894.7H894.7v668.83H225.87l-160 160Z" />
    </svg>
  )
}
