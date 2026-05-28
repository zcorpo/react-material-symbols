import type { SVGProps, JSX } from 'react'

export default function ViewQuilt({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M172-252v-456h616v456H172Zm214-239h380v-195H386v195Zm202 217h178v-195H588v195Zm-202 0h178v-195H386v195Zm-192 0h170v-412H194v412Z" />
    </svg>
  )
}
