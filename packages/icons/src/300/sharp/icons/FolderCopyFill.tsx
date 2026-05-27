import type { SVGProps } from 'react'

export default function FolderCopyFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M60-144.62v-568.45h45.39V-190h703.84v45.38H60Zm110.77-110.77V-860h286.15l80 80H900v524.61H170.77Z" />
    </svg>
  )
}
