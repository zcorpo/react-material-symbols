import type { SVGProps, JSX } from 'react'

export default function RightPanelClose({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m346-370 111-110-111-110v220Zm292 176h128v-572H638v572Zm-444 0h422v-572H194v572Zm444 0h128-128Zm-466 22v-616h616v616H172Z" />
    </svg>
  )
}
