import type { SVGProps, JSX } from 'react'

export default function FormatIndentDecreaseFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M95-95v-87h771v87H95Zm320-171v-87h451v87H415Zm0-171v-87h451v87H415Zm0-171v-87h451v87H415ZM95-779v-87h771v87H95Zm182 477L95-483l182-177v358Z" />
    </svg>
  )
}
