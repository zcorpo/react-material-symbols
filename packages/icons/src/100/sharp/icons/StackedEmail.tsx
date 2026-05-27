import type { SVGProps } from 'react'

export default function StackedEmail({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M188-280v-520h680v520H188Zm340-223L210-753v451h636v-451L528-503Zm0-25 318-250H210l318 250ZM92-184v-416h22v394h620v22H92Zm754-594H210h636Z" />
    </svg>
  )
}
