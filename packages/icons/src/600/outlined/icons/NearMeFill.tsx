import type { SVGProps } from 'react'

export default function NearMeFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M509.48-105.87 394.35-402.26 97.96-517.39v-62.22l764.08-290.35-289.78 764.09h-62.78Z" />
    </svg>
  )
}
