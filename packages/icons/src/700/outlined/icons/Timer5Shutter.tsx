import type { SVGProps } from 'react'

export default function Timer5Shutter({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M325-194v-92h260v-148H325v-332h352v92H417v148h168q38.33 0 65.17 26.83Q677-472.33 677-434v148q0 38.33-26.17 65.17Q624.67-194 586-194H325Z" />
    </svg>
  )
}
