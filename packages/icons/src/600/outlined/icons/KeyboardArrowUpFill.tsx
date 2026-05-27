import type { SVGProps } from 'react'

export default function KeyboardArrowUpFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m480-540.43-197 197L226.43-400 480-653.57 733.57-400 677-343.43l-197-197Z" />
    </svg>
  )
}
