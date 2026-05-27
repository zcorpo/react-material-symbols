import type { SVGProps, JSX } from 'react'

export default function SubjectFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M212-240v-34h292v22l-292 12Zm0-151v-22h536v22H212Zm0-156v-22h536v22H212Zm0-139v-34h536v34H212Z" />
    </svg>
  )
}
