import type { SVGProps, JSX } from 'react'

export default function Dashboard2({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M570-160v-290h310v290H570ZM450-510v-290h430v290H450ZM80-160v-290h430v290H80Zm0-350v-290h310v290H80Zm430-60h310v-170H510v170ZM140-220h310v-170H140v170Zm490 0h190v-170H630v170ZM140-570h190v-170H140v170Zm370 0Zm-60 180Zm180 0ZM330-570Z" />
    </svg>
  )
}
