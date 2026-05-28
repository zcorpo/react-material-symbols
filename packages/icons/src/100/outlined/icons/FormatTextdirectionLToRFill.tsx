import type { SVGProps, JSX } from 'react'

export default function FormatTextdirectionLToRFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M428-386v-181l-23-13q-53 0-89.5-36T279-704q0-52 35.5-88t87.5-36h216v22h-77v420h-22v-420h-69v420h-22Zm247 254-16-16 86-86H172v-22h572l-86-86 17-17 113 113-113 114Z" />
    </svg>
  )
}
