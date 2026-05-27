import type { SVGProps } from 'react'

export default function MonitorFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M260-120v-73l47-47H80v-600h800v600H652l48 47v73H260Z" />
    </svg>
  )
}
