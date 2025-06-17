import React from 'react'
import { Button } from '@/components/ui/button'

const page = () => {
  return (
    <main className="relative sm:w-[70%] w-[90%] m-auto sm:pt-[2%] mb-[4%] sm:mt-0 mt-8 flex flex-col items-center text-center">
      <h1 className="mb-4 mt-24">調整中</h1>
      <p className="text-muted-foreground mb-6">
        このページは現在調整中で稼働しておりません。<br />
        サービス開始までしばらくお待ちください。
      </p>
      <a href="https://meshiden.jp" className="w-full">
        <Button className="sm:w-1/2 w-full mt-24">メインページ</Button>
      </a>
    </main>

  )
}

export default page