import type { SVGProps } from 'react'

export default function HorizontalAlignRightFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M774.61-180v-600H820v600h-45.39ZM513.69-298.31l-32.61-32.61 126.38-126.39H140v-45.38h467.46L483.92-626.23l32.62-32.62L695.38-480 513.69-298.31Z" />
    </svg>
  )
}
