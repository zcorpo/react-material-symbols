import type { SVGProps } from 'react'

export default function FitPageWidthFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M338.69-386.69v-186.62L245.39-480l93.3 93.31ZM714.61-480l-93.3-93.31v186.62l93.3-93.31ZM100-180v-600h760v600H100Z" />
    </svg>
  )
}
