import type { SVGProps } from 'react'

export default function DraftFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M145.87-65.87V-894.7h441.35L814.7-667.05v601.18H145.87Zm400.04-563.04h189l-189-186v186Z" />
    </svg>
  )
}
