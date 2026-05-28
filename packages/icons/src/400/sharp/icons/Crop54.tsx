import type { SVGProps, JSX } from 'react'

export default function Crop54({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M120-160v-640h720v640H120Zm60-60h600v-520H180v520Zm0 0v-520 520Z" />
    </svg>
  )
}
