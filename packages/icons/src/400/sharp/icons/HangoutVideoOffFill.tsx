import type { SVGProps } from 'react'

export default function HangoutVideoOffFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M843-28 702-169H92v-614h82l11 11v86L38-833l43-43L886-71l-43 43Zm45-123L724-315v-321L568-512v-127H400L243-796h645v645ZM257-329h286L257-615v286Z" />
    </svg>
  )
}
