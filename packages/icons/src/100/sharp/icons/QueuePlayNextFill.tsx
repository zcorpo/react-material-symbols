import type { SVGProps, JSX } from 'react'

export default function QueuePlayNextFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M469-389h22v-123h123v-22H491v-123h-22v123H346v22h123v123Zm314 289-16-16 121-121-120-121 15-16 137 137-137 137Zm-408-72v-80H132v-536h696v307H682v229h-85v80H375Z" />
    </svg>
  )
}
