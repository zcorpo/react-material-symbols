import type { SVGProps } from 'react'

export default function PictureInPictureMedium({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M296-329v-337h415v337H296ZM55-135v-94h756v-597h95v691H55Z" />
    </svg>
  )
}
