import './globals.css'

export const metadata = {
  title: '핸드폰 번호 조회',
  description: '존재하는 핸드폰 번호인지 조회 해보는 사이트입니다.',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
