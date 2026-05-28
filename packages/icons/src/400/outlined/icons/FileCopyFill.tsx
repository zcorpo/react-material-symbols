import type { SVGProps, JSX } from 'react'

export default function FileCopyFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M140-40q-24 0-42-18t-18-42v-619h60v619h498v60H140Zm120-120q-24 0-42-18t-18-42v-640q0-24 18-42t42-18h348l232 232v468q0 24-18 42t-42 18H260Zm318-502h202L578-860v198Z" />
    </svg>
  )
}
