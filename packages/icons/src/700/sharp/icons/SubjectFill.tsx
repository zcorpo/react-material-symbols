import type { SVGProps, JSX } from 'react'

export default function SubjectFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M135-145v-87h434v87H135Zm0-192v-87h691v87H135Zm0-192v-87h691v87H135Zm0-192v-95h691v95H135Z" />
    </svg>
  )
}
