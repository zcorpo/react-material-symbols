import type { SVGProps } from 'react'

export default function ShopTwoFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m465-356 178-114-178-125v239ZM17-34v-554h94v459h598v95H17Zm139-138v-606h233v-165h321v165h233v606H156Zm327-606h133v-71H483v71Z" />
    </svg>
  )
}
