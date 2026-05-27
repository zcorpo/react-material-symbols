import type { SVGProps } from 'react'

export default function HangoutVideoFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M246-324h312v-123l157 123v-312L558-513v-123H246v312ZM65.87-145.87V-814.7H894.7v668.83H65.87Z" />
    </svg>
  )
}
