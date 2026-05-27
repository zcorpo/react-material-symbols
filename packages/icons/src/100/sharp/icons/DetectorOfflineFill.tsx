import type { SVGProps } from 'react'

export default function DetectorOfflineFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m376-172-15-15 104-104-104-104 15-15 104 104 104-104 15 15-104 104 104 104-15 15-104-104-104 104Zm-89-486 32 86h322l32-86H287Zm15 108-39-108h-91v-130h616v130h-91l-41 108H302Z" />
    </svg>
  )
}
