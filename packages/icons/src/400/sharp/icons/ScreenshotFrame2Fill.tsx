import type { SVGProps, JSX } from 'react'

export default function ScreenshotFrame2Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M820-570v-130H690v-60h190v190h-60Zm-740 0v-190h190v60H140v130H80Zm610 370v-60h130v-130h60v190H690Zm-610 0v-190h60v130h130v60H80Z" />
    </svg>
  )
}
