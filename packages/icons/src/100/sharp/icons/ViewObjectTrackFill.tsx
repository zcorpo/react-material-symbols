import type { SVGProps } from 'react'

export default function ViewObjectTrackFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M318-212q-44.64 0-75.32-31.42-30.68-31.43-30.68-76 0-44.58 30.68-76.08T318-427h404q44.64 0 75.32 31.42 30.68 31.43 30.68 76 0 44.58-30.68 76.08T722-212H318Zm-80-321q-44.64 0-75.32-31.42-30.68-31.43-30.68-76 0-44.58 30.68-76.08T238-748h404q44.64 0 75.32 31.42 30.68 31.43 30.68 76 0 44.58-30.68 76.08T642-533H238Z" />
    </svg>
  )
}
