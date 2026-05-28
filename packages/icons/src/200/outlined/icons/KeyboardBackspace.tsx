import type { SVGProps, JSX } from 'react'

export default function KeyboardBackspace({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M372.08-268.92 160-480.23l212.08-212.08 22.23 22.23-174.46 174.46H800v30.77H219.85l174.46 173.7-22.23 22.23Z" />
    </svg>
  )
}
