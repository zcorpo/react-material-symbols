import type { SVGProps, JSX } from 'react'

export default function EmergencyHome({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M439-445h82v-218h-82v218Zm70 131q12-12 12-28.5t-12-29Q497-384 480-384t-29 12.5q-12 12.5-12 29t12 28.5q12 12 29 12t29-12ZM480-13 13-480l467-467 467 467L480-13Zm0-136 331-331-331-331-331 331 331 331Zm0-331Z" />
    </svg>
  )
}
