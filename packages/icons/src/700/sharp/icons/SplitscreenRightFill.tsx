import type { SVGProps, JSX } from 'react'

export default function SplitscreenRightFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M504-95v-771h377v771H504ZM80-95v-771h376v771H80Zm94-676v582h188v-582H174Z" />
    </svg>
  )
}
