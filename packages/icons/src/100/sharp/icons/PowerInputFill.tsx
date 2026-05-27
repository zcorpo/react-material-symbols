import type { SVGProps } from 'react'

export default function PowerInputFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M132-395v-22h155v22H132Zm0-148v-22h656v22H132Zm249 148v-22h158v22H381Zm252 0v-22h155v22H633Z" />
    </svg>
  )
}
