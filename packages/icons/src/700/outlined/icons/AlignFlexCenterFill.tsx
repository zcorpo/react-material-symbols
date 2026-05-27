import type { SVGProps } from 'react'

export default function AlignFlexCenterFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M450-55v-358H102v-134h348v-359h95v359h313v134H545v358h-95Z" />
    </svg>
  )
}
