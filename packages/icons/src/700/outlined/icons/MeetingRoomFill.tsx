import type { SVGProps, JSX } from 'react'

export default function MeetingRoomFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M62-95v-94h103v-677h450v45h181v632h103v94H702v-631h-87v631H62Zm400-352.39q13-13.4 13-32.5 0-19.11-13-32.61T429.6-526q-19.41 0-33 13.39-13.6 13.4-13.6 32.5 0 19.11 13.6 32.61 13.59 13.5 33 13.5 19.4 0 32.4-13.39Z" />
    </svg>
  )
}
