import type { SVGProps, JSX } from 'react'

export default function DesktopWindows({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M376-172v-22h82v-86H132v-508h696v508H502v86h82v22H376ZM154-302h652v-464H154v464Zm0 0v-464 464Z" />
    </svg>
  )
}
