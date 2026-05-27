import type { SVGProps } from 'react'

export default function PictureInPictureMobileFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M800-80H160v-800h640v800ZM695-446v-335H438v335h257Z" />
    </svg>
  )
}
