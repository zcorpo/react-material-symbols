import type { SVGProps, JSX } from 'react'

export default function PagelessFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M92-132v-253h22v231h271v22H92Zm483 0v-22h271v-231h22v253H575ZM92-574v-254h293v22H114v232H92Zm754 0v-232H575v-22h293v254h-22Z" />
    </svg>
  )
}
