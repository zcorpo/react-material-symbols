import type { SVGProps, JSX } from 'react'

export default function RestoreFromTrash({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M450-339h60v-196l80 85 43-43-153-154-153 154 43 43 80-85v196ZM201-120v-630h-41v-60h188v-30h264v30h188v60h-41v630H201Zm60-60h438v-570H261v570Zm0-570v570-570Z" />
    </svg>
  )
}
