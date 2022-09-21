
export default function Home() {
  return (
    <>
      <div className='body'>
        <div className='card'>
          <h1>home</h1>
        </div>
      </div>
      <style jsx>{`
        .body {
          display: flex;
          justify-content: center;
          align-items: center;
          padding-top: 10%;
        }
        .card {
          width: 40%;
          padding: 1rem;
          background-color: #fff;
          border-radius: 10px;
          display: flex;
          justify-content: center;
        }
        h1{
          color: red;
        }
        `}</style>
    </>
  )
}
