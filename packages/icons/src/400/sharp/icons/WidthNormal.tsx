import type { SVGProps, JSX } from 'react'

export default function WidthNormal({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M80-160v-640h800v640H80Zm60-60h187v-520H140v520Zm247 0h186v-520H387v520Zm246 0h187v-520H633v520ZM387-740v520-520Z" />
    </svg>
  )
}
