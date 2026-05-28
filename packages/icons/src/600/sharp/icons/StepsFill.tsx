import type { SVGProps, JSX } from 'react'

export default function StepsFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M814.04-71.52 293-570H57.26l248.48-331.74 142.74 71.09v125.21l144.74-33.17 89.13 272.09 206.13 206.13-30 188.87h-44.44Zm-312.43 0L19.56-510H268L726.04-71.52H501.61Z" />
    </svg>
  )
}
