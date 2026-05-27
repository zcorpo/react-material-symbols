import type { SVGProps } from 'react'

export default function VideoFrameCopy({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M92-184v-446h22v424h606v22H92Zm754-459v-123H723v-22h145v145h-22Zm-658 0v-145h145v22H210v123h-22Zm535 363v-22h123v-123h22v145H723Zm-535 0v-145h22v123h123v22H188Zm299-146 173-108-173-109v217Z" />
    </svg>
  )
}
