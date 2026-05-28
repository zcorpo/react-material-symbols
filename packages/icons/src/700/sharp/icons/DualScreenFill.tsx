import type { SVGProps, JSX } from 'react'

export default function DualScreenFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M147-193v-701l427 157v716L147-193Zm487 6v-591L317-894h497v707H634Z" />
    </svg>
  )
}
