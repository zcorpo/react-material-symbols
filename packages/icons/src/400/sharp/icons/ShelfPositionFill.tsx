import type { SVGProps, JSX } from 'react'

export default function ShelfPositionFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M120-121v-201h720v201H120Zm530-261v-458h190v458H650Zm-530 0v-458h190v458H120Zm250 0v-458h220v458H370Z" />
    </svg>
  )
}
