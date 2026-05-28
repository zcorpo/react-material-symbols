import type { SVGProps, JSX } from 'react'

export default function KeepFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m615.54-448 76 69.31v45.38H502.69v220.61L480-90l-22.69-22.7v-220.61H268.46v-45.38L340-448v-327.23h-47.31v-45.38h370.15v45.38h-47.3V-448Z" />
    </svg>
  )
}
