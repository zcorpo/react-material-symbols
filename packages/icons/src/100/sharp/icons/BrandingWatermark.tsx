import type { SVGProps, JSX } from 'react'

export default function BrandingWatermark({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M428-304h308v-230H428v230Zm-296 92v-536h696v536H132Zm22-22h652v-492H154v492Zm0 0v-492 492Z" />
    </svg>
  )
}
