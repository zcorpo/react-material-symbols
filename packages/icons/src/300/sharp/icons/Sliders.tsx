import type { SVGProps, JSX } from 'react'

export default function Sliders({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M100.62-380v-200h758.76v200H100.62Zm463.84-45.39h252.39v-109.22H564.46v109.22Z" />
    </svg>
  )
}
