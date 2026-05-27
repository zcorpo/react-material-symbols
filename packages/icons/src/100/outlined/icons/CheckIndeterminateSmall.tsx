import type { SVGProps } from 'react'

export default function CheckIndeterminateSmall({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M292-469v-22h376v22H292Z" />
    </svg>
  )
}
