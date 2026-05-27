import type { SVGProps, JSX } from 'react'

export default function DoorBackFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M140-140v-45.39h80V-820h520v634.61h80V-140H140Zm272.19-320.35q9.04-9.03 9.04-21.88t-9.04-21.89q-9.04-9.03-21.88-9.03-12.85 0-21.89 9.03-9.04 9.04-9.04 21.89 0 12.85 9.04 21.88 9.04 9.04 21.89 9.04 12.84 0 21.88-9.04Z" />
    </svg>
  )
}
