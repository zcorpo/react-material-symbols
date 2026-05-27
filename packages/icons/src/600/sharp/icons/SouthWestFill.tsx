import type { SVGProps } from 'react'

export default function SouthWestFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M190.39-190.39v-415.22h79.22v280.43L758-813.57 813.57-758 325.18-269.61h280.43v79.22H190.39Z" />
    </svg>
  )
}
