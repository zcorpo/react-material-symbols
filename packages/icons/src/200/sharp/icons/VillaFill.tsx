import type { SVGProps, JSX } from 'react'

export default function VillaFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M404.62-160v-279.67h290.76q0-21.83 15.44-37.23 15.44-15.41 37.12-15.41t36.87 15.37Q800-461.58 800-440v280H628.85v-118.46h-52.31V-160H404.62ZM160-160v-453.54l447.31-171.84v314.61H373.85V-160H160Z" />
    </svg>
  )
}
