import type { SVGProps } from 'react'

export default function FlexNoWrap({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M10-264v-433h270v433H10Zm335 0v-433h270v433H345Zm335 0v-433h270v433H680ZM97-351h96v-259H97v259Zm670 0h96v-259h-96v259Z" />
    </svg>
  )
}
