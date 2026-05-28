import type { SVGProps, JSX } from 'react'

export default function GMobiledata({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M300-295.38v-369.24h306v30.77H330.77v307.7h258.46v-138.47H465.92v-30.76H620v200H300Z" />
    </svg>
  )
}
