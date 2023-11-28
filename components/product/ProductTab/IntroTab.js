import useMobile from '@/hooks/useMobile'
import Image from 'next/image'
import React from 'react'
export default function IntroTab({ feature, featureImgs }) {
  const [isMobile] = useMobile()
  return (
    <div className="p-sm-5 p-3 bg-white">
      {/* 文字 */}
      {feature.includes('<span') ? (
        <div dangerouslySetInnerHTML={{ __html: feature }}></div>
      ) : (
        feature.split('\n').map((text, index) => <p key={index}>{text}</p>)
      )}
      {/* 圖片 */}
      <div className="d-flex justify-content-center">
        <div className={`text-center ${isMobile ? 'w-100' : 'w-75'}`}>
          {featureImgs.map((img, index) => (
            <Image
              key={index}
              src={`/images/product/${img}`}
              alt={img}
              className="w-100 h-auto"
              width={0}
              height={0}
              sizes="100vw"
            />
          ))}
        </div>
      </div>
    </div>
  )
}
