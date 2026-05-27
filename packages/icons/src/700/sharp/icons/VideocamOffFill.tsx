import type { SVGProps } from 'react'

export default function VideocamOffFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M906-275 746-435v122L233-826h513v301l160-160v410ZM859-12 24-849l50-50L911-62l-52 50ZM148-826l596 597v94H55v-691h93Z" />
    </svg>
  )
}
