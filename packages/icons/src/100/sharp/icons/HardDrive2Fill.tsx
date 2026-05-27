import type { SVGProps } from 'react'

export default function HardDrive2Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M550-220q11 0 19.5-8.5T578-248q0-11-8.5-19.5T550-276q-11 0-19.5 8.5T522-248q0 11 8.5 19.5T550-220Zm122 0q11 0 19.5-8.5T700-248q0-11-8.5-19.5T672-276q-11 0-19.5 8.5T644-248q0 11 8.5 19.5T672-220ZM172-411v-417h616v417H172Zm0 279v-257h616v257H172Z" />
    </svg>
  )
}
