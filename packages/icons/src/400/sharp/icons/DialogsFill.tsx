import type { SVGProps } from 'react'

export default function DialogsFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M264-264h432v-432H264v432ZM120-120v-720h720v720H120Z" />
    </svg>
  )
}
