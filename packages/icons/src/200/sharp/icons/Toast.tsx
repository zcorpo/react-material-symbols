import type { SVGProps, JSX } from 'react'

export default function Toast({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M260-260h440v-30.77H260V-260ZM160-160v-640h640v640H160Zm30.77-30.77h578.46v-578.46H190.77v578.46Zm0 0v-578.46 578.46Z" />
    </svg>
  )
}
