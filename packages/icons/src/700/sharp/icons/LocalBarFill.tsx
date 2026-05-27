import type { SVGProps } from 'react'

export default function LocalBarFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M223-103v-94h210v-208L95-771v-95h771v95L527-405v208h210v94H223Zm71-592h372l75-72H219l75 72Z" />
    </svg>
  )
}
