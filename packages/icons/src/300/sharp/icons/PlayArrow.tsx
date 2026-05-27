import type { SVGProps, JSX } from 'react'

export default function PlayArrow({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M340-238.39v-487.68l383.07 243.84L340-238.39Zm45.39-243.84Zm0 161 253.99-161-253.99-161v322Z" />
    </svg>
  )
}
