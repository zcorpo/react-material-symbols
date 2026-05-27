import type { SVGProps } from 'react'

export default function PictureInPictureMobile({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M800-80H160v-800h640v800Zm-60-60v-680H220v680h520Zm0-680H220h520Zm-45 374v-335H438v335h257Zm-60-60H498v-215h137v215Z" />
    </svg>
  )
}
