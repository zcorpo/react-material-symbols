import type { SVGProps, JSX } from 'react'

export default function PenSize4Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M192-300.14Q192-344 224-376l360-360q32.18-32 76.09-32Q704-768 736-735.86t32 76Q768-616 736-584L376-224q-32.18 32-76.09 32Q256-192 224-224.14t-32-76Z" />
    </svg>
  )
}
