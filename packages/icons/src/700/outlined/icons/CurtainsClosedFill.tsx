import type { SVGProps } from 'react'

export default function CurtainsClosedFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M46-86v-95h80v-693h708v693h80v95H46Zm384-95h100v-598H430v598Z" />
    </svg>
  )
}
