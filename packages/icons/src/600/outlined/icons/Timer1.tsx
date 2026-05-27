import type { SVGProps } from 'react'

export default function Timer1({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M527.91-196.61v-480H305.87v-86.78H614.7v566.78h-86.79Z" />
    </svg>
  )
}
