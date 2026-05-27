import type { SVGProps } from 'react'

export default function SdCardFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M160-80v-561l239-239h401v800H160Zm223-448h60v-157h-60v157Zm119 0h60v-157h-60v157Zm119 0h60v-157h-60v157Z" />
    </svg>
  )
}
