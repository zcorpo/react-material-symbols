import type { SVGProps, JSX } from 'react'

export default function BatteryAndroidFramePlusFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M80-280v-400h578.46v30.77H110.77v338.46h547.69V-280H80Zm664.62-64.62v-120h-120v-30.76h120v-120h30.76v120h120v30.76h-120v120h-30.76Zm-583.08-16.92v-236.92h376.92v236.92H161.54Z" />
    </svg>
  )
}
