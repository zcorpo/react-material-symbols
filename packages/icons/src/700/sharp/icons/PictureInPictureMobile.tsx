import type { SVGProps, JSX } from 'react'

export default function PictureInPictureMobile({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M826-55H135v-851h691v851Zm-95-94v-662H229v662h502Zm0-662H229h502Zm-45 374v-335H429v335h257Zm-60-60H489v-215h137v215Z" />
    </svg>
  )
}
