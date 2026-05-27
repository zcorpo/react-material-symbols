import type { SVGProps, JSX } from 'react'

export default function DockToLeftFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M185.09-185.09h372.08v-589.82H185.09v589.82Zm-79.22 79.22V-854.7H854.7v748.83H105.87Z" />
    </svg>
  )
}
