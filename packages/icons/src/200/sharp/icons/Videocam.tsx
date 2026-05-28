import type { SVGProps, JSX } from 'react'

export default function Videocam({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M139.23-200v-560h560v257.31l121.54-121.54v287.69L699.23-458.08V-200h-560ZM170-230.77h498.46v-498.46H170v498.46Zm0 0v-498.46 498.46Z" />
    </svg>
  )
}
