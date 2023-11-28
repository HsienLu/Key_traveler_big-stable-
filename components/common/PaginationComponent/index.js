import React, { useState } from 'react'
import { Pagination } from 'antd'

// 建立 PaginationComponent 组件
export default function PaginationComponent({
  totalItems,
  pageSize,
  onPageChange,
  currentPage: propCurrentPage,
  scrollTo,
}) {
  const [currentPage, setCurrentPage] = useState(propCurrentPage)

  // 頁數變化
  const handlePageChange = (page) => {
    setCurrentPage(page)
    onPageChange(page) // 呼叫傳遞進來的 onPageChange
    window.scrollTo({ top: scrollTo ? scrollTo : 0, behavior: 'auto' })
  }

  const itemRender = (page, type, originalElement) => {
    if (type === 'prev' || type === 'next') {
      return (
        <>
          <div
            className="bg-primary-subtle text-primary"
            style={{ borderRadius: '6px' }}
          >
            <i
              className={
                type === 'prev'
                  ? 'fa-solid fa-caret-left'
                  : 'fa-solid fa-caret-right'
              }
            ></i>
          </div>
        </>
      )
    }

    return (
      <div
        className={
          currentPage === page ? 'text-light' : 'text-primary bg-primary-subtle'
        }
        style={{ borderRadius: '6px' }}
      >
        {originalElement}
      </div>
    )
  }

  return (
    <>
      <div className="d-flex justify-content-center">
        <Pagination
          current={currentPage}
          total={totalItems}
          pageSize={pageSize}
          onChange={handlePageChange}
          itemRender={itemRender}
          showSizeChanger={false}
          responsive={true}
          defaultCurrent={1}
        />
      </div>
    </>
  )
}
