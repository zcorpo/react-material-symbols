import type { SVGProps, JSX } from 'react'

export default function FileCopy({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M780-160H260q-24 0-42-18t-18-42v-640q0-24 18-42t42-18h348l232 232v468q0 24-18 42t-42 18ZM578-662v-198H260v640h520v-442H578ZM140-40q-24 0-42-18t-18-42v-619h60v619h498v60H140Zm120-820v198-198 640-640Z" />
    </svg>
  )
}
