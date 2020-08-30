import Nav from '../components/nav'
import Tile from '../components/tile'

const diamond = "https://images.unsplash.com/photo-1598705352140-be8e33a97d55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1837&q=80"
const woman = "https://images.unsplash.com/photo-1598690875075-0b8430676967?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=658&q=80"

export async function getStaticProps(context) {
  const res = await fetch()
}

export default function IndexPage() {
  return (
    <div className="md:px-8 xl:px-20"> 
      <Nav></Nav>
      <div className="flex flex-wrap pt-20 pb-10">
        <div className="w-full lg:w-1/2">
          <Tile imgSrc={woman} title="Woman in the sky" href="https://unsplash.com"></Tile>
        </div>
        <div className="w-full lg:w-1/2">
          <Tile imgSrc={diamond} title="Diamond prism" href="https://unsplash.com"></Tile>
        </div>
        <div className="w-full lg:w-1/2">
          <Tile imgSrc="diconature_preview.PNG"></Tile>
        </div>
        <div className="w-full lg:w-1/2">
          <Tile imgSrc="enzogame_preview.PNG"></Tile>
        </div>
        <div className="w-full lg:w-1/2">
          <Tile imgSrc="valerie_confiture_preview.PNG"></Tile>
        </div>
        <div className="w-full lg:w-1/2">
          <Tile imgSrc="https://nextjs.org/static/images/showcase-thumbnails/yicaiglobal.jpg"></Tile>
        </div>
      </div>
    </div>
  )
}
