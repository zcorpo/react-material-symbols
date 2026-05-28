import type { SVGProps, JSX } from 'react'

export default function ArrowsMoreDownFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M220-140v-405.39h45.39v360h360V-140H220Zm194.61-194.23v-405.38H460v360h360v45.38H414.61Z" />
    </svg>
  )
}
