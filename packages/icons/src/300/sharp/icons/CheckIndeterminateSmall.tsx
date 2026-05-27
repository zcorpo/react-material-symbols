import type { SVGProps } from 'react'

export default function CheckIndeterminateSmall({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M260-457.31v-45.38h440v45.38H260Z" />
    </svg>
  )
}
