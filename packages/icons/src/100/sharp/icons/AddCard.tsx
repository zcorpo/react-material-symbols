import type { SVGProps } from 'react'

export default function AddCard({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M132-212v-536h696v220H154v294h358v22H132Zm22-386h652v-128H154v128Zm638 492v-120H672v-22h120v-120h22v120h120v22H814v120h-22ZM154-234v-492 492Z" />
    </svg>
  )
}
