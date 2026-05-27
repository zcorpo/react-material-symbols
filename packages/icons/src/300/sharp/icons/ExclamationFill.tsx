import type { SVGProps } from 'react'

export default function ExclamationFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M457.31-383.85v-354.61h45.38v354.61h-45.38Zm0 162.31v-45.38h45.38v45.38h-45.38Z" />
    </svg>
  )
}
