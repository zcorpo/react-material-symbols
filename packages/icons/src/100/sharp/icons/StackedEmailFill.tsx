import type { SVGProps, JSX } from 'react'

export default function StackedEmailFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M188-280v-520h680v520H188Zm-96 96v-416h22v394h620v22H92Zm436-319 318-250v-25L528-528 210-778v25l318 250Z" />
    </svg>
  )
}
