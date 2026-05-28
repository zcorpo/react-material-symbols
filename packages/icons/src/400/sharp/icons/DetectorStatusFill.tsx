import type { SVGProps, JSX } from 'react'

export default function DetectorStatusFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M438-120 310-248l43-42 85 85 169-170 43 43-212 212ZM301-660l18 60h322l18-60H301Zm-26 120-38-120H120v-180h720v180H723l-44 120H275Z" />
    </svg>
  )
}
