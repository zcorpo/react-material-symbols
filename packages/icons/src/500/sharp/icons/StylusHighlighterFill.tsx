import type { SVGProps, JSX } from 'react'

export default function StylusHighlighterFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M276.46-321.22v-525h84.28l321.56 156v369H276.46Zm-122.44 207.2 42.59-110.78h566.54l43.07 110.78h-652.2Z" />
    </svg>
  )
}
