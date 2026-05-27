import type { SVGProps } from 'react'

export default function MonitorFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M249-95v-73l58-59H55v-639h851v639H652l59 59v73H249Z" />
    </svg>
  )
}
