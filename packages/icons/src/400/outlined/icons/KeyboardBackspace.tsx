import type { SVGProps } from 'react'

export default function KeyboardBackspace({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M359-242 120-481l239-239 43 43-166 166h604v60H236l166 166-43 43Z" />
    </svg>
  )
}
