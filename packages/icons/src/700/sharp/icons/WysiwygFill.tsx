import type { SVGProps } from 'react'

export default function WysiwygFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M97-97v-766h766v766H97Zm83-83h600v-520H180v520Zm100-310v-60h390v60H280Zm0 160v-60h230v60H280Z" />
    </svg>
  )
}
