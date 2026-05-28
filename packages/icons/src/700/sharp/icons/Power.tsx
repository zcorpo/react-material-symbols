import type { SVGProps, JSX } from 'react'

export default function Power({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M442-189h76v-86l133-146.55V-600H309v178l133 146.7v86.3Zm-94 94v-142L215-384v-311h112v-171h95v171h117v-171h94v171h113v311L613-237v142H348Zm132-300Z" />
    </svg>
  )
}
