import type { SVGProps } from 'react'

export default function StylusPencilFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m245-326 201-514h68l201 514H245Zm-85 206 39-106h562l39 106H160Z" />
    </svg>
  )
}
