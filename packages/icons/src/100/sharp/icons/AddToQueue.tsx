import type { SVGProps, JSX } from 'react'

export default function AddToQueue({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M469-386h22v-123h123v-22H491v-123h-22v123H346v22h123v123Zm-94 214v-80H132v-536h696v536H585v80H375ZM154-274h652v-492H154v492Zm0 0v-492 492Z" />
    </svg>
  )
}
