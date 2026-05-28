import type { SVGProps, JSX } from 'react'

export default function Upload2({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M135-55v-94h691v94H135Zm191-194v-235H144l336-422 336 422H635v235H326Zm94-95h120v-251h68L480-751 352-595h68v251Zm60-251Z" />
    </svg>
  )
}
