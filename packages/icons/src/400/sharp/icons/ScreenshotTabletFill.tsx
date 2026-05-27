import type { SVGProps, JSX } from 'react'

export default function ScreenshotTabletFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M40-160v-640h880v640H40Zm150-60h580v-520H190v520Zm360-60h160v-160h-40v120H550v40ZM250-520h40v-120h120v-40H250v160Z" />
    </svg>
  )
}
