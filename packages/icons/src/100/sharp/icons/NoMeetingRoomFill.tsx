import type { SVGProps, JSX } from 'react'

export default function NoMeetingRoomFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m653-418-22-22v-285h-82v203L284-788h265v41h104v329Zm134 271L549-386v214H172v-22h84v-485L153-782l16-16 635 635-17 16Z" />
    </svg>
  )
}
