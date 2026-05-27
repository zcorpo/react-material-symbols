import type { SVGProps } from 'react'

export default function MedicalInformationFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M319-266h22v-83h83v-22h-83v-83h-22v83h-83v22h83v83Zm201-127h214v-22H520v22Zm0 88h134v-22H520v22ZM132-132v-496h289v-200h118v200h289v496H132Zm311-425h74v-249h-74v249Z" />
    </svg>
  )
}
