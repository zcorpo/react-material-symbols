import type { SVGProps, JSX } from 'react'

export default function TextFormatFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M183-189v-94h594v94H183Zm85-182 175-440h80l175 440h-91l-39-106H392l-38 106h-86Zm141-167h144l-70-189h-4l-70 189Z" />
    </svg>
  )
}
