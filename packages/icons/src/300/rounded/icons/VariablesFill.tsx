import type { SVGProps } from 'react'

export default function VariablesFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M140-328.69v-302.62q0-12.2 8.29-20.44 8.3-8.25 20.56-8.25h622.3q12.26 0 20.56 8.25 8.29 8.25 8.29 20.44v302.62q0 12.2-8.29 20.44-8.3 8.25-20.56 8.25h-622.3q-12.26 0-20.56-8.25-8.29-8.25-8.29-20.44Z" />
    </svg>
  )
}
