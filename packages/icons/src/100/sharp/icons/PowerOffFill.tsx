import type { SVGProps, JSX } from 'react'

export default function PowerOffFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M421-172v-101L292-406v-206h33v33L81-823l16-16L837-99l-15 16-237-237-46 47v101H421Zm237-210L397-643v-145h22v163h122v-163h22v163h105v232l-10 11Z" />
    </svg>
  )
}
