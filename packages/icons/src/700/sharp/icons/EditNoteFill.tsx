import type { SVGProps, JSX } from 'react'

export default function EditNoteFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M135-355v-94h345v94H135Zm0-188v-94h504v94H135Zm0-188v-95h504v95H135Zm381 596v-144l278-277 143 143-277 278H516Zm285-246 30-32-37-37-31 31 38 38Z" />
    </svg>
  )
}
