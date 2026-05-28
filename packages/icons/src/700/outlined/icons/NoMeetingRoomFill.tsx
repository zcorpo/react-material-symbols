import type { SVGProps, JSX } from 'react'

export default function NoMeetingRoomFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m796-283-94-95v-348h-87v261L214-866h401v45h181v538Zm62 248L615-278v183H62v-94h103v-540L53-840l51-51L909-86l-51 51Z" />
    </svg>
  )
}
