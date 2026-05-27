import type { SVGProps } from 'react'

export default function CopyAllFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M160-272.31v-40h40v40h-40Zm0-152.31v-40h40v40h-40Zm0-152.3v-40h40v40h-40ZM312.31-120v-40h40v40h-40Zm-4.62-147.69V-840H760v572.31H307.69ZM464.62-120v-40h40v40h-40ZM160-120v-40h40v40h-40Zm456.92 0v-40h40v40h-40ZM160-729.23v-40h40v40h-40Z" />
    </svg>
  )
}
