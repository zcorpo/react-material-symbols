import type { SVGProps, JSX } from 'react'

export default function Tab({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M140-220h680v-347H524v-173H140v520Zm-60 60v-640h800v640H80Zm60-60v-520 520Z" />
    </svg>
  )
}
