import type { SVGProps, JSX } from 'react'

export default function EditFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M96-95v-176l622-623 181 174L273-95H96Zm627-585 40-39-42-43-41 40 43 42Z" />
    </svg>
  )
}
