import type { SVGProps } from 'react'

export default function PictureInPictureMobile({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M229-55q-39.05 0-66.52-27.47Q135-109.95 135-149v-662q0-39.46 27.48-67.23Q189.95-906 229-906h502q39.46 0 67.23 27.77Q826-850.46 826-811v662q0 39.05-27.77 66.53Q770.46-55 731-55H229Zm502-94v-662H229v662h502Zm0-662H229h502ZM429-437h257v-335H429v335Zm60-60v-215h137v215H489Z" />
    </svg>
  )
}
