import type { SVGProps } from 'react'

export default function EditFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M172-172v-67l556-558 70 69-558 556h-68Zm538-502 56-55-37-36-55 56 36 35Z" />
    </svg>
  )
}
