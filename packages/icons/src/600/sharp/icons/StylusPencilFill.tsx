import type { SVGProps } from 'react'

export default function StylusPencilFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M234.26-323.17 443.74-854.7h72.52l208.91 531.53H234.26Zm-88.39 217.3 47.48-117.3h572.74l48.61 117.3H145.87Z" />
    </svg>
  )
}
