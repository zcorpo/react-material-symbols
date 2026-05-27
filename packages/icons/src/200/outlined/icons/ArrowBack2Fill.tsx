import type { SVGProps } from 'react'

export default function ArrowBack2Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M600-270.85 273.85-478.54 600-686.23v415.38Z" />
    </svg>
  )
}
