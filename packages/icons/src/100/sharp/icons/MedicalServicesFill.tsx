import type { SVGProps, JSX } from 'react'

export default function MedicalServicesFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M132-132v-536h240v-108h216v108h240v536H132Zm262-536h172v-86H394v86Zm75 279v120h22v-120h120v-22H491v-120h-22v120H349v22h120Z" />
    </svg>
  )
}
