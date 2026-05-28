import type { SVGProps, JSX } from 'react'

export default function Bookmarks({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M212-132v-544h391v544L407.5-234 212-132Zm22-40 174-88 173 88v-482H234v482Zm492-97v-537H322v-22h426v559h-22ZM234-654h347-347Z" />
    </svg>
  )
}
