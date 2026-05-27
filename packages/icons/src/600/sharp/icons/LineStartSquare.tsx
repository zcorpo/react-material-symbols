import type { SVGProps, JSX } from 'react'

export default function LineStartSquare({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M153-333h294.56v-294.56H153V-333Zm373.78 79.78H73.22v-453.56h453.56v187.17h362.83v79.22H526.78v187.17ZM300-480Z" />
    </svg>
  )
}
