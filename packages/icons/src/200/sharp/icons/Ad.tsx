import type { SVGProps, JSX } from 'react'

export default function Ad({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M160-160v-640h640v640H160Zm30.77-30.77h578.46v-463H190.77v463Z" />
    </svg>
  )
}
