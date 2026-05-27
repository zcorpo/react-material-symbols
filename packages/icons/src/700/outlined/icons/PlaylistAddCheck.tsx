import type { SVGProps } from 'react'

export default function PlaylistAddCheck({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M103-303v-95h323v95H103Zm0-189v-94h484v94H103Zm0-188v-94h484v94H103Zm560 525L503-315l66-67 94 93 185-185 68 67-253 252Z" />
    </svg>
  )
}
