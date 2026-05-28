import type { SVGProps, JSX } from 'react'

export default function GridView({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M172-517v-271h271v271H172Zm0 345v-271h271v271H172Zm345-345v-271h271v271H517Zm0 345v-271h271v271H517ZM194-539h227v-227H194v227Zm345 0h227v-227H539v227Zm0 345h227v-227H539v227Zm-345 0h227v-227H194v227Zm345-345Zm0 118Zm-118 0Zm0-118Z" />
    </svg>
  )
}
