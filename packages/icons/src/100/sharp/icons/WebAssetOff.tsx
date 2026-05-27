import type { SVGProps } from 'react'

export default function WebAssetOff({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M857-72 716-212H132v-536h80v32L90-838l16-16L872-88l-15 16ZM154-234h540L284-645H154v411Zm674-2-22-22v-387H419L316-748h512v512Z" />
    </svg>
  )
}
