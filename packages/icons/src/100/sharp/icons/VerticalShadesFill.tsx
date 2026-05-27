import type { SVGProps, JSX } from 'react'

export default function VerticalShadesFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M132-172v-22h80v-594h536v594h80v22H132Zm251-22h195v-572H383v572Z" />
    </svg>
  )
}
