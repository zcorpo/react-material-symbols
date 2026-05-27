import type { SVGProps } from 'react'

export default function Eject({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M223.08-213.08v-43.84h513.84v43.84H223.08Zm6.69-148.15L480-736.92l250.61 375.69H229.77Zm250.85-43.85Zm-168.54 0h335.84L480-653.85 312.08-405.08Z" />
    </svg>
  )
}
