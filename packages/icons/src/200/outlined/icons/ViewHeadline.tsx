import type { SVGProps, JSX } from 'react'

export default function ViewHeadline({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M180-390.46v-30.77h600v30.77H180Zm0 150.77v-30.77h600v30.77H180Zm0-299.08v-30.77h600v30.77H180Zm0-150.77v-30.77h600v30.77H180Z" />
    </svg>
  )
}
