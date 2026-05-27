import type { SVGProps } from 'react'

export default function FormatAlignLeft({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M160-160v-30.77h640V-160H160Zm0-152.69v-30.77h400v30.77H160Zm0-151.93v-30.76h640v30.76H160Zm0-152.69v-30.77h400v30.77H160Zm0-151.92V-800h640v30.77H160Z" />
    </svg>
  )
}
