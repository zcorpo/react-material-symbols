import type { SVGProps, JSX } from 'react'

export default function VerticalShadesFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M100-140v-45.39h80V-820h600v634.61h80V-140H100Zm284.23-45.39h191.92v-589.22H384.23v589.22Z" />
    </svg>
  )
}
