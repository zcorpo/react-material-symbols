import type { SVGProps, JSX } from 'react'

export default function SubheaderFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M269-609h308v-59H269v59Zm-97 437v-616h616v616H172Z" />
    </svg>
  )
}
