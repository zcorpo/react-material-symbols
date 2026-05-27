import type { SVGProps, JSX } from 'react'

export default function ArrowBack2({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M620-233.93 236.93-477.77 620-721.61v487.68Zm-45.39-243.84Zm0 161v-322l-253.99 161 253.99 161Z" />
    </svg>
  )
}
