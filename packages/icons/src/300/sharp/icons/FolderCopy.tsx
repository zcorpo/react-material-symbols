import type { SVGProps } from 'react'

export default function FolderCopy({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M60-144.62v-568.45h45.39V-190h703.84v45.38H60Zm110.77-110.77V-860h286.15l80 80H900v524.61H170.77Zm45.38-45.38h638.46v-433.84H518.08l-80-80H216.15v513.84Zm0 0v-513.84 513.84Z" />
    </svg>
  )
}
