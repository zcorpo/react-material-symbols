import type { SVGProps, JSX } from 'react'

export default function Mobile3Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M336.61-193h284.78v-79.22H336.61V-193ZM185.87-25.87V-934.7h586.26v217.35h42.57v184.31h-42.57v507.17H185.87Z" />
    </svg>
  )
}
