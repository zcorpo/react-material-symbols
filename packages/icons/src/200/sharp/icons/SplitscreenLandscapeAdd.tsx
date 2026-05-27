import type { SVGProps, JSX } from 'react'

export default function SplitscreenLandscapeAdd({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M523.08-316.92h200v-326.16h-200v326.16Zm-286.16 0h200v-326.16h-200v326.16Zm572.31-327.7v-84.61h-84.61V-760h84.61v-84.62H840V-760h84.62v30.77H840v84.61h-30.77ZM150.77-230.77v-498.46 498.46ZM120-200v-560h518.46v30.77H150.77v498.46h658.46v-327.46H840V-200H120Z" />
    </svg>
  )
}
