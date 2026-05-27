import type { SVGProps, JSX } from 'react'

export default function ArrowTopRightFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M240-200v-418.08h460.38L540.69-777.77 562.92-800 760-601.46 563.15-404.62l-22.23-22.23 160.46-160.46H270.77V-200H240Z" />
    </svg>
  )
}
