import type { SVGProps, JSX } from 'react'

export default function ViewColumnFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M100.78-185.87V-774.7h226.78v588.83H100.78Zm265.83 0V-774.7h227.35v588.83H366.61Zm265.83 0V-774.7h227.34v588.83H632.44Z" />
    </svg>
  )
}
