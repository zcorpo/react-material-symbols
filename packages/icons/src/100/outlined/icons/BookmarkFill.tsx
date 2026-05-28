import type { SVGProps, JSX } from 'react'

export default function BookmarkFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M252-198v-538q0-22 15.5-38t38.5-16h348q23 0 38.5 16t15.5 38v538l-228-98-228 98Z" />
    </svg>
  )
}
