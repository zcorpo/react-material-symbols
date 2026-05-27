import type { SVGProps } from 'react'

export default function ReceiptFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M172-144v-672l48 32 52-32 52 32 52-32 52 32 52-32 52 32 52-32 52 32 52-32 52 32 48-32v672l-48-32-52 32-52-32-52 32-52-32-52 32-52-32-52 32-52-32-52 32-52-32-48 32Zm93-199h431v-22H265v22Zm0-126h431v-22H265v22Zm0-127h431v-22H265v22Z" />
    </svg>
  )
}
