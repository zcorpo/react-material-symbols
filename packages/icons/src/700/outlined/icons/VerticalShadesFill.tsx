import type { SVGProps, JSX } from 'react'

export default function VerticalShadesFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M46-86v-95h80v-693h708v693h80v95H46Zm344-95h180v-598H390v598Z" />
    </svg>
  )
}
