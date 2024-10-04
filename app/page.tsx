
import ImageCard from "./image-card";

export default function Home() {
  return (
    <div>
      <nav
        className="m-2 p-2 h-11 top-0 sticky grid grid-cols-3 place-content-center backdrop-brightness-0"
      >
        <div className="m-2 p-2 font-bold text-2xl"><h1><a href="/">Photo Gallery</a></h1></div>
        <div>
          <input
            className="p-2 rounded-md focus:outline-none w-full"
            type="text"
            placeholder="Search photos..."
          />
        </div>
        <div className="m-2 p-2">
          <ul className="grid grid-cols-3 place-content-center">
            <li><a href="/">upload</a></li>
            <li><a href="https://github.com/vasusubb47/photo-gallery" target="_blank">view code</a></li>
          </ul>
        </div>
      </nav>
      <hr />
      <main>
        <div className="p-2 grid grid-cols-5 place-content-center gap-2 w-auto">
          {(() => {
            const images = Array.from({ length: 30 });
            return images.map((_, index) => (
              <ImageCard key={index} />
            ));
          })()}
        </div>
      </main>
    </div>
  );
}
