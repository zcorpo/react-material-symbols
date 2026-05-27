import type { SVGProps, JSX } from 'react'

export default function TextFieldsAlt({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M80-86v-94h800v94H80Zm700-194v-560h63v560h-63Zm-650 0 237-560h113l231 560H596l-54-140H294l-55 140H130Zm191-214h195l-95-252h-4l-96 252Z" />
    </svg>
  )
}
