import type { SVGProps, JSX } from 'react'

export default function Tornado({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M14-855h932L480-50 14-855Zm164 94 66 114h472l66-114H178Zm120 208 62 106h240l62-106H298Zm116 200 66 114 66-114H414Z" />
    </svg>
  )
}
