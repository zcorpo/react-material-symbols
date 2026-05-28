import type { SVGProps, JSX } from 'react'

export default function Pallet({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M117.7-128.47V-190h724.6v61.53h-66.15v-30.76H513.08v30.76h-66.16v-30.76H183.85v30.76H117.7Zm102.69-199.99v-520h519.22v520H220.39Zm30.76-30.77h457.7v-458.46h-457.7v458.46ZM360-651.54h240v-30.77H360v30.77ZM251.15-359.23v-458.46 458.46Z" />
    </svg>
  )
}
