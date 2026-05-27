import type { SVGProps, JSX } from 'react'

export default function HMobiledata({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M290-280v-400h45.38v177.31h289.24V-680H670v400h-45.38v-177.31H335.38V-280H290Z" />
    </svg>
  )
}
