import type { SVGProps } from 'react'

export default function ReplyFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M774.91-185.87V-356q0-56.61-35.89-92.5t-92.5-35.89H258.04L411.44-331l-56.01 56.57L105.87-524l249.56-249.57L411.44-717l-153.4 153.39h388.48q88.96 0 148.57 59.61t59.61 148v170.13h-79.79Z" />
    </svg>
  )
}
