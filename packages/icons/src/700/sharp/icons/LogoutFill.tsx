import type { SVGProps, JSX } from 'react'

export default function LogoutFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M95-95v-771h390v95H189v582h296v94H95Zm561-174-67-66 97-98H354v-94h330l-97-98 67-66 212 212-210 210Z" />
    </svg>
  )
}
