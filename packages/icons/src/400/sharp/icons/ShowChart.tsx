import type { SVGProps, JSX } from 'react'

export default function ShowChart({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m126-220-46-46 300-300 160 161 298-335 42 41-340 384-160-159-254 254Z" />
    </svg>
  )
}
