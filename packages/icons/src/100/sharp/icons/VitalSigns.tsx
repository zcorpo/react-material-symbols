import type { SVGProps, JSX } from 'react'

export default function VitalSigns({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M96-469v-22h200l87 209 194-450 105 241h184v22H666l-89-210-195 450-102-240H96Z" />
    </svg>
  )
}
