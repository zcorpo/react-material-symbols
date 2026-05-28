import type { SVGProps, JSX } from 'react'

export default function AutoAwesomeMotionFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M320-80v-560h560v560H320ZM200-186v-574h574v60H260v514h-60ZM80-306v-574h574v60H140v514H80Z" />
    </svg>
  )
}
