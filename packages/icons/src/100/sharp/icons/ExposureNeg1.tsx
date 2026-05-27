import type { SVGProps, JSX } from 'react'

export default function ExposureNeg1({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M374-435H146v-22h228v22Zm292 181v-423l-106 74-13-17 123-86h18v452h-22Z" />
    </svg>
  )
}
