import type { SVGProps } from 'react'

export default function HomeStorageFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m187-71-85-510h756L773-71H187Zm166-251h254v-95H353v95ZM193-641v-94h574v94H193Zm80-154v-95h414v95H273Z" />
    </svg>
  )
}
