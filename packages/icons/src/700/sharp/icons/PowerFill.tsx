import type { SVGProps } from 'react'

export default function PowerFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M348-95v-142L215-384v-311h112v-171h95v171h117v-171h94v171h113v311L613-237v142H348Z" />
    </svg>
  )
}
