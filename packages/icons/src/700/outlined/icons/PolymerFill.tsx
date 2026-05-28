import type { SVGProps, JSX } from 'react'

export default function PolymerFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M191-153 10-480l183.41-327H335L151-480l123 220 335.38-547H766l185 327-184 327H625l184-327.1L686-699 351.95-153H191Z" />
    </svg>
  )
}
