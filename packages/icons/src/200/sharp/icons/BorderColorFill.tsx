import type { SVGProps, JSX } from 'react'

export default function BorderColorFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M80 0v-61.77h800V0H80Zm120-247.15v-81.08l492.15-492.16 81.08 80.31-492.92 492.93H200Zm478.77-443.16 50-50-35.62-36.38-50 50 35.62 36.38Z" />
    </svg>
  )
}
