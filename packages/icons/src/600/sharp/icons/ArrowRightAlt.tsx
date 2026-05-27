import type { SVGProps } from 'react'

export default function ArrowRightAlt({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m560.57-228.43-56.57-55 158.96-158.96H145.87v-79.22h517.09L503-682.13l56.57-54.44L814.7-482 560.57-228.43Z" />
    </svg>
  )
}
