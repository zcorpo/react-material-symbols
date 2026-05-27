import type { SVGProps, JSX } from 'react'

export default function ArrowRightAltFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m547.69-268.92-22.23-21.23 175.69-175.7H200v-30.77h501.15L525.23-672.54l22.23-21.23L760-481.23 547.69-268.92Z" />
    </svg>
  )
}
