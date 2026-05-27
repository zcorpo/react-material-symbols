import type { SVGProps, JSX } from 'react'

export default function MarkdownCopyFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M294-280v-548h428v548H294Zm-96 96v-516h22v494h374v22H198Zm196-266h25v-183h77v122h25v-122h77v183h25v-208H394v208Z" />
    </svg>
  )
}
