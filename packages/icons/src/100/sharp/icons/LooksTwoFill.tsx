import type { SVGProps, JSX } from 'react'

export default function LooksTwoFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M388-305h185v-22H410v-143h163v-185H388v22h163v141H388v187ZM172-172v-616h616v616H172Z" />
    </svg>
  )
}
