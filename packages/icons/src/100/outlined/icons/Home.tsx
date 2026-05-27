import type { SVGProps, JSX } from 'react'

export default function Home({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M234-194h165v-237h162v237h165v-369L480-750 234-563.33V-194Zm-22 22v-402l268-203 268 203v402H539v-237H421v237H212Zm268-300Z" />
    </svg>
  )
}
