import type { SVGProps, JSX } from 'react'

export default function SwipeRightAltFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M352-263q-91 0-154-63.5T135-480q0-90 63-153.5T352-697q84 0 139 50.5T564-527h161l-83-83 67-67 196 197-196 197-67-67 83-83H564q-18 69-73 119.5T352-263Z" />
    </svg>
  )
}
