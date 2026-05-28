import type { SVGProps, JSX } from 'react'

export default function Battery3Bar({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M315.38-120v-668.31h96.93V-840h135.38v51.69h96.93V-120H315.38Zm30.77-281.69h267.7v-356.62h-267.7v356.62Z" />
    </svg>
  )
}
