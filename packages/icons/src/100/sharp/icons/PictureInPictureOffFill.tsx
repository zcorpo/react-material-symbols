import type { SVGProps } from 'react'

export default function PictureInPictureOffFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M851-78 716-212H132v-536h80l22 22h-32L90-838l16-16L866-94l-15 16Zm-23-158L607-457h159v-229H458v80L316-748h512v512Z" />
    </svg>
  )
}
