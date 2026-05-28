import type { SVGProps, JSX } from 'react'

export default function ArrowBack2Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M654.7-171 173.43-477 654.7-783v612Z" />
    </svg>
  )
}
