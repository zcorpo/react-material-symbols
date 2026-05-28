import type { SVGProps, JSX } from 'react'

export default function Lists({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M132-212v-64h64v64h-64Zm178 0v-64h518v64H310ZM132-448v-64h64v64h-64Zm178 0v-64h518v64H310ZM132-684v-64h64v64h-64Zm178 0v-64h518v64H310Z" />
    </svg>
  )
}
