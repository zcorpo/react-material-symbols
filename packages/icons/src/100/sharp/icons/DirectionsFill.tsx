import type { SVGProps } from 'react'

export default function DirectionsFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M346-386h22v-123h205v58l70-69-70-71v60H346v145Zm134 263L123-480l357-357 357 357-357 357Z" />
    </svg>
  )
}
