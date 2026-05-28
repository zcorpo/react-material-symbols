import type { SVGProps, JSX } from 'react'

export default function LayersClear({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m673-409-67-67 121-94-247-192-91 69-67-67 158-123 401 313-208 161Zm111 110-68-67 89-68 78 58-99 77Zm38 241L671-210 480-63 79-374l78-60 323 252 124-96-43-43-81 63L79-570l130-103L66-816l50-51 757 757-51 52ZM498-584Z" />
    </svg>
  )
}
