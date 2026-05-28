import type { SVGProps, JSX } from 'react'

export default function StylusHighlighter({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M262-306v-560h117l317 156v404H262Zm94-94h246v-250L356-771v371ZM135-95l54-126h581l56 126H135Zm221-305h246-246Z" />
    </svg>
  )
}
