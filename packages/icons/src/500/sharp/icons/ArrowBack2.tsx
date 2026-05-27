import type { SVGProps, JSX } from 'react'

export default function ArrowBack2({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M646.22-186 188.76-477l457.46-291v582Zm-68.37-291Zm0 166.93v-333.86L315.07-477l262.78 166.93Z" />
    </svg>
  )
}
