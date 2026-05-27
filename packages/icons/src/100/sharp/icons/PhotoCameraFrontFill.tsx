import type { SVGProps } from 'react'

export default function PhotoCameraFrontFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M132-172v-534h176l74-82h196l74 82h176v534H132Zm224-156h248v-1q0-31-32-47t-92-16q-60 0-92 16t-32 47v1Zm161-159q15-15 15-37t-15-37q-15-15-37-15t-37 15q-15 15-15 37t15 37q15 15 37 15t37-15Z" />
    </svg>
  )
}
