import type { SVGProps, JSX } from 'react'

export default function BookFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M154.02-74.02v-812.2h652.2v812.2h-652.2Zm332.46-477.83 97-56 97 56v-266h-194v266Z" />
    </svg>
  )
}
