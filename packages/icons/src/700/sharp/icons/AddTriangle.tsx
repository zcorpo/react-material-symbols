import type { SVGProps } from 'react'

export default function AddTriangle({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m15-135 465-811 466 811H15Zm151-87h629L480-772 166-222Zm271-65h87v-68h69v-87h-69v-69h-87v69h-68v87h68v68Zm44-111Z" />
    </svg>
  )
}
