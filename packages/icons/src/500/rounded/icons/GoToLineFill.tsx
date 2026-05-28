import type { SVGProps, JSX } from 'react'

export default function GoToLineFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M441.63-711.75q-15.7-15.81-15.7-38.37 0-22.55 15.82-38.25 15.81-15.7 38.37-15.7 22.55 0 38.25 15.82 15.7 15.81 15.7 38.37 0 22.55-15.82 38.25-15.81 15.7-38.37 15.7-22.55 0-38.25-15.82Zm0 540q-15.7-15.81-15.7-38.37 0-22.55 15.82-38.25 15.81-15.7 38.37-15.7 22.55 0 38.25 15.82 15.7 15.81 15.7 38.37 0 22.55-15.82 38.25-15.81 15.7-38.37 15.7-22.55 0-38.25-15.82Z" />
    </svg>
  )
}
