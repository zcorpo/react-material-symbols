import type { SVGProps } from 'react'

export default function JamboardKioskFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M284.62-160v-30.77h180V-320H120v-480h720v480H495.38v129.23h180V-160H284.62Z" />
    </svg>
  )
}
