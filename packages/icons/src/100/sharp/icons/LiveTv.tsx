import type { SVGProps } from 'react'

export default function LiveTv({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m407-391 202-129-202-129v258Zm-32 219v-80H132v-536h696v536H585v80H375ZM154-274h652v-492H154v492Zm0 0v-492 492Z" />
    </svg>
  )
}
