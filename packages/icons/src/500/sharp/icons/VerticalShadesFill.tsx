import type { SVGProps, JSX } from 'react'

export default function VerticalShadesFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M71.87-111.87v-68.37h80v-667.89h656.26v667.89h80v68.37H71.87Zm314.33-68.37h187.6v-599.52H386.2v599.52Z" />
    </svg>
  )
}
