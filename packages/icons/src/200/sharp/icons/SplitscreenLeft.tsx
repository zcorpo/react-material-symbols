import type { SVGProps, JSX } from 'react'

export default function SplitscreenLeft({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M184.61-160v-640h244.62v640H184.61Zm346.16 0v-640h244.62v640H530.77Zm213.85-609.23H561.54v578.46h183.08v-578.46Z" />
    </svg>
  )
}
