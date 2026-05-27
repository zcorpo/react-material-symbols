import type { SVGProps } from 'react'

export default function HMobiledata({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M343.39-446.61V-310q0 14.19-9.52 23.79-9.53 9.6-24.05 9.6-14.52 0-23.86-9.36-9.35-9.36-9.35-24.03v-340q0-14.19 9.52-23.79 9.53-9.6 24.05-9.6 14.52 0 23.86 9.36 9.35 9.36 9.35 24.17v136.47h273.22V-650q0-14.19 9.52-23.79 9.53-9.6 24.05-9.6 14.52 0 23.86 9.36 9.35 9.36 9.35 24.03v340q0 14.19-9.52 23.79-9.53 9.6-24.05 9.6-14.52 0-23.86-9.36-9.35-9.36-9.35-24.17v-136.47H343.39Z" />
    </svg>
  )
}
