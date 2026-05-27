import type { SVGProps } from 'react'

export default function SpaceBar({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M154.02-354.02V-600h68.13v177.85h515.7V-600h68.37v245.98h-652.2Z" />
    </svg>
  )
}
