import type { SVGProps, JSX } from 'react'

export default function DesktopLandscapeAdd({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M154-234v-492 492Zm106-106v-172h332v172H260ZM132-212v-536h696v300h-22v-278H154v492h378v22H132Zm546-236v-150H360v-22h340v172h-22Zm48 316v-100H626v-22h100v-100h22v100h100v22H748v100h-22Z" />
    </svg>
  )
}
