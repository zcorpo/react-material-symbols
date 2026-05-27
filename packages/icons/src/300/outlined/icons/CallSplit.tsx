import type { SVGProps, JSX } from 'react'

export default function CallSplit({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M458.92-180v-289.46L225.39-702.62v131.47H180V-780h209.23v45.39H258l246.31 245.92V-180h-45.39Zm99.93-347.85-31.62-32L702-734.61H571.15V-780H780v208.85h-45.39v-131.47L558.85-527.85Z" />
    </svg>
  )
}
