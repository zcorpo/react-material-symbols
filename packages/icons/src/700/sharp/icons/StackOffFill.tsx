import type { SVGProps, JSX } from 'react'

export default function StackOffFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M906-168 431-642h475v474ZM554-702v-117H253l-87-87h475v204h-87ZM867-4l-50-51H319v-497L140-730v324h119v87H54v-498l-39-38 51-51L918-55 867-4Z" />
    </svg>
  )
}
