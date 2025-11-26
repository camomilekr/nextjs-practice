import fetchBook from "@/lib/fetchBook";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default async function BookPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const book = await fetchBook(Number(id));

  if (!book) {
    return <div>도서를 찾을 수 없습니다.</div>;
  }

  return (
      <>
        <Head>
          <title>띨리의 서재 - {book.title}</title>
          <meta property="og:image" content="/thumbnail.png" />
          <meta property="og:title" content={`띨리의 서재 - ${book.title}`} />
          <meta property="og:description" content={book.description} />        
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="ko_KR" />
          <meta property="og:site_name" content="띨리의 서재" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />        
        </Head>
        <div>          
          <div className="w-full h-12">
            <Link href="/" className="w-12 h-12 bg-white border border-gray-300 rounded-md flex items-center justify-center">
              뒤로
            </Link>  
          </div>
          {book && (
            <div>
              <div 
                className="w-full max-h-400 h-[400px] flex items-center justify-center bg-cover bg-center bg-no-repeat relative"
                style={{backgroundImage: `url(${book.coverImgUrl})`}}
              >
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
                <Image 
                    className="z-1 max-h-350 h-full"
                    src={book.coverImgUrl} alt={book.title} width={300} height={400} style={{ objectFit: 'scale-down' }} 
                />
              </div>
              <div className="p-4">
                <div className="text-2xl font-bold text-black">{book.title}</div>
                <div className="text-md text-black mt-2">{book.subTitle}</div>
                <div className="text-sm text-gray-500 mt-2">{book.author} | {book.publisher}</div>
                <div className="text-sm text-gray-900 mt-2 bg-gray-100 rounded-md p-2 whitespace-pre-line line-height-1.5">{book.description}</div>
              </div>
            </div>        
          )}
        </div>
      </>
  );
}