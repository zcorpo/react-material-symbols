import type { SVGProps, JSX } from 'react'

export default function WebStoriesFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M700-140v-680h60v680h-60ZM80-80v-800h520v800H80Zm780-121v-557h40v557h-40Z" />
    </svg>
  )
}
