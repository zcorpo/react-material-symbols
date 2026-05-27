import type { SVGProps } from 'react'

export default function CallMadeFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m212-180-32-32 482.62-482.61H362.85V-740H740v377.15h-45.39v-299.77L212-180Z" />
    </svg>
  )
}
