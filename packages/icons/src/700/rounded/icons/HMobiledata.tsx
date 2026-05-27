import type { SVGProps } from 'react'

export default function HMobiledata({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M346-444v134q0 15.3-10.18 25.65-10.17 10.35-26 10.35-15.82 0-25.82-9.92-10-9.93-10-26.08v-340q0-15.3 10.18-25.65 10.17-10.35 26-10.35 15.82 0 25.82 9.92 10 9.93 10 26.33V-516h268v-134q0-15.3 10.18-25.65 10.17-10.35 26-10.35 15.82 0 25.82 9.92 10 9.93 10 26.08v340q0 15.3-10.18 25.65-10.17 10.35-26 10.35-15.82 0-25.82-9.92-10-9.93-10-26.33V-444H346Z" />
    </svg>
  )
}
