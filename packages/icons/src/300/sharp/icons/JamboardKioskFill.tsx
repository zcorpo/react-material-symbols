import type { SVGProps, JSX } from 'react'

export default function JamboardKioskFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M267.31-140v-45.39h190V-320H100v-500h760v500H502.69v134.61h190V-140H267.31Z" />
    </svg>
  )
}
