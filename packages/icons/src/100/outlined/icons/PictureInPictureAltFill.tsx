import type { SVGProps, JSX } from 'react'

export default function PictureInPictureAltFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M458-278h308v-229H458v229Zm-272 66q-23 0-38.5-15.5T132-266v-428q0-23 15.5-38.5T186-748h588q23 0 38.5 15.5T828-694v428q0 23-15.5 38.5T774-212H186Z" />
    </svg>
  )
}
