import type { SVGProps, JSX } from 'react'

export default function Timer1Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M532-246v-452H372v-16h176v468h-16Z" />
    </svg>
  )
}
