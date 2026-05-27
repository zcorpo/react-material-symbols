import type { SVGProps } from 'react'

export default function RMobiledata({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M55-574v-332h293v211h-57l56 121h-92l-50-115h-78v115H55Zm72-187h149v-73H127v73Z" />
    </svg>
  )
}
