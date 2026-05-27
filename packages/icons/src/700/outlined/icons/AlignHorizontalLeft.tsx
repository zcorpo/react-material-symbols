import type { SVGProps } from 'react'

export default function AlignHorizontalLeft({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M55-55v-851h94v851H55Zm194-212v-134h417v134H249Zm0-292v-134h657v134H249Z" />
    </svg>
  )
}
