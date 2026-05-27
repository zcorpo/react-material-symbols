import type { SVGProps, JSX } from 'react'

export default function Work({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M80-120v-600h240v-160h320v160h240v600H80Zm60-60h680v-480H140v480Zm240-540h200v-100H380v100ZM140-180v-480 480Z" />
    </svg>
  )
}
