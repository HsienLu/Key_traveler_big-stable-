import React from 'react'
import Link from 'next/link'
import style from '@/styles/home/_cate-select.module.scss'

export default function CateCard({ name, img, link }) {
  return (
    <Link href={link} className="text-decoration-none">
      <div className={`${style['cate-select']} overflow-hidden rounded-4`}>
        <div className={`${style['cate-card']} card rounded-4 border-0`}>
          <div className="card-img overflow-hidden rounded-4">
            <img alt="example" src={img} className="card-img-top" />
          </div>
          <div className={`${style['overlay']} rounded-4`}>
            <h4 className="text-center fw-bolder py-3 text-white">{name}</h4>
          </div>
        </div>
        <h4 className="text-center fw-bolder py-3">{name}</h4>
      </div>
    </Link>
  )
}
