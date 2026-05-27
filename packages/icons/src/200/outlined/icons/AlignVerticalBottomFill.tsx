import type { SVGProps, JSX } from 'react'

export default function AlignVerticalBottomFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M120-140v-30.77h720V-140H120Zm192.31-143.08v-537.69h72.31v537.69h-72.31Zm263.07 0v-297.69h72.31v297.69h-72.31Z" />
    </svg>
  )
}
