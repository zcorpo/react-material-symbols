import type { SVGProps, JSX } from 'react'

export default function WebStories({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M700-146v-668h83v668h-83ZM46-63v-834h554v834H46Zm837-168v-499h52v499h-52Zm-743 77h366v-649H140v649Zm0-649v649-649Z" />
    </svg>
  )
}
