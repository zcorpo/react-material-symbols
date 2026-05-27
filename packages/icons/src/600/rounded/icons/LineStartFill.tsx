import type { SVGProps, JSX } from 'react'

export default function LineStartFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M179.61-380.39q-42.32 0-71.25-28.97-28.93-28.96-28.93-70.78t28.93-70.64q28.93-28.83 71.25-28.83 30.22 0 55.09 16.72 24.87 16.72 35.56 43.28h570.13q16.71 0 28.16 11.5T880-479.82q0 16.78-11.45 28.1-11.45 11.33-28.16 11.33H270.26q-10.69 26.56-35.56 43.28-24.87 16.72-55.09 16.72Z" />
    </svg>
  )
}
