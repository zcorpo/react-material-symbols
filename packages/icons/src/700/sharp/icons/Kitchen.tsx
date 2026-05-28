import type { SVGProps, JSX } from 'react'

export default function Kitchen({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M307-641v-118h71v118h-71Zm0 354v-189h71v189h-71ZM135-55v-851h691v851H135Zm94-94h502v-380H229v380Zm0-440h502v-222H229v222Z" />
    </svg>
  )
}
