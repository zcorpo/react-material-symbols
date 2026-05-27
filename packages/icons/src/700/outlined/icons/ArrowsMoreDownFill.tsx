import type { SVGProps } from 'react'

export default function ArrowsMoreDownFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M180-100v-454h94v360h360v94H180Zm224-224v-455h95v360h360v95H404Z" />
    </svg>
  )
}
