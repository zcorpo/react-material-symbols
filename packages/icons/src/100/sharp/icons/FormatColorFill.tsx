import type { SVGProps, JSX } from 'react'

export default function FormatColorFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m271-847 15-17 365 364-227 230-226-231 211-208-138-138Zm154 154L230-500h389L425-693Zm274 434q-15-15-15-37 0-16 7-30t16-28q7-10 14.5-20t14.5-20q7 10 14.5 20t13.5 20q9 14 16 28t7 30q0 22-15 37t-36.5 15q-21.5 0-36.5-15ZM80 0v-44h800V0H80Z" />
    </svg>
  )
}
