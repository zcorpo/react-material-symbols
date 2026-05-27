import type { SVGProps, JSX } from 'react'

export default function FloatLandscape2Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M509.23-389.23h213.85v-253.85H509.23v253.85ZM120-200v-560h720v560H120Z" />
    </svg>
  )
}
