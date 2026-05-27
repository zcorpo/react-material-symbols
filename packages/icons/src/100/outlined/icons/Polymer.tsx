import type { SVGProps, JSX } from 'react'

export default function Polymer({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M254-224 112-480l144-256h121L233-480l89 157 253-413h129l144 256-144 256H583l144-256-89-157-254 413H254Z" />
    </svg>
  )
}
