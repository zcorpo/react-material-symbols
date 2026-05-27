import type { SVGProps } from 'react'

export default function SplitscreenLeftFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M80-95v-771h376v771H80Zm424 0v-771h377v771H504Zm282-676H599v582h187v-582Z" />
    </svg>
  )
}
