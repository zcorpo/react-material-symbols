import type { SVGProps, JSX } from 'react'

export default function Analytics({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M114.02-114.02v-732.2h732.2v732.2h-732.2Zm68.13-68.13h595.7v-595.7h-595.7v595.7ZM285.2-277h60v-205h-60v205Zm329.84 0h60v-420h-60v420ZM450-277h60v-118h-60v118Zm0-205h60v-60h-60v60ZM182.15-182.15v-595.7 595.7Z" />
    </svg>
  )
}
