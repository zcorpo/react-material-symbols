import type { SVGProps } from 'react'

export default function FileCopyFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M200-160v-760h408l232 232v528H200Zm378-502h202L578-860v198ZM80-40v-679h60v619h498v60H80Z" />
    </svg>
  )
}
