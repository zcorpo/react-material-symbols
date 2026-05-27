import type { SVGProps } from 'react'

export default function Timer5Shutter({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M325-194v-92h260v-148H325v-332h352v92H417v148h260v332H325Z" />
    </svg>
  )
}
