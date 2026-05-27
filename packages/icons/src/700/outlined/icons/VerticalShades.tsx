import type { SVGProps } from 'react'

export default function VerticalShades({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M46-86v-95h80v-693h708v693h80v95H46Zm175-95h90v-598h-90v598Zm169 0h180v-598H390v598Zm259 0h90v-598h-90v598Zm-428 0v-598 598Zm518 0v-598 598Z" />
    </svg>
  )
}
