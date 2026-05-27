import type { SVGProps, JSX } from 'react'

export default function MapFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m612-94-263-93L95-84v-695l254-87 263 92 254-103v695L612-94Zm-34-112v-484l-196-66v484l196 66Z" />
    </svg>
  )
}
