import type { SVGProps, JSX } from 'react'

export default function LiveTvFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m392.23-365.77 242-154.23-242-154.23v308.46ZM347.31-140v-80H100v-600h760v600H612.69v80H347.31Z" />
    </svg>
  )
}
