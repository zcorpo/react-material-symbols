import type { SVGProps } from 'react'

export default function BookFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M200-120v-720h560v720H200Zm301.38-450.92 78.54-46 78.54 46v-238.31H501.38v238.31Z" />
    </svg>
  )
}
