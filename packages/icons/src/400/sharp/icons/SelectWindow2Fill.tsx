import type { SVGProps, JSX } from 'react'

export default function SelectWindow2Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M820-368v-324H244v-188h636v512h-60ZM80-80v-552h680v552H80Z" />
    </svg>
  )
}
