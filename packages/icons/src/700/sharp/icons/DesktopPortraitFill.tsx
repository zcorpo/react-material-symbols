import type { SVGProps } from 'react'

export default function DesktopPortraitFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M439-219h222v-383H439v383ZM299-336h75v-331h155v-74H299v405ZM826-55H135v-851h691v851Z" />
    </svg>
  )
}
