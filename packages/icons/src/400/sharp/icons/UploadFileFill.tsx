import type { SVGProps, JSX } from 'react'

export default function UploadFileFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M452-202h60v-201l82 82 42-42-156-152-154 154 42 42 84-84v201ZM160-80v-800h421l219 219v581H160Zm391-554h189L551-820v186Z" />
    </svg>
  )
}
