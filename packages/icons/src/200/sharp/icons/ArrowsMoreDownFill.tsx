import type { SVGProps, JSX } from 'react'

export default function ArrowsMoreDownFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M240-160v-390.77h30.77v360h360V-160H240Zm169.23-168.46v-390.77H440v360h360v30.77H409.23Z" />
    </svg>
  )
}
