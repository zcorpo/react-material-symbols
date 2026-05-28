import type { SVGProps, JSX } from 'react'

export default function ArrowLeftAltFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M398.08-253.85 171.92-480l226.77-226.77 32.62 31.62-172.47 172.46h529.85v45.38H258.84l171.85 171.85-32.61 31.61Z" />
    </svg>
  )
}
