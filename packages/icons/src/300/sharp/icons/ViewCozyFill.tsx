import type { SVGProps, JSX } from 'react'

export default function ViewCozyFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M140-540v-280h280v280H140Zm0 400v-280h280v280H140Zm400-400v-280h280v280H540Zm0 400v-280h280v280H540Z" />
    </svg>
  )
}
