import type { SVGProps } from 'react'

export default function PictureInPictureMobileFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M780-100H180v-760h600v760Zm-89.62-350.62v-324.61H443.77v324.61h246.61Z" />
    </svg>
  )
}
