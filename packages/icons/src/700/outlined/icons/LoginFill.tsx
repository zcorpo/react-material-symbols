import type { SVGProps, JSX } from 'react'

export default function LoginFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M475-95v-94h296v-582H475v-95h296q39.46 0 67.23 27.77Q866-810.46 866-771v582q0 39.05-27.77 66.53Q810.46-95 771-95H475Zm-78-174-68-66 98-98H95v-94h330l-98-98 68-66 211 212-209 210Z" />
    </svg>
  )
}
