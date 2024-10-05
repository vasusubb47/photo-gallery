
import ImageCard from "./_components/image-card";
import UploadModal from "./_components/upload";

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
        <UploadModal />
        <div className="p-2 flex flex-row flex-wrap gap-2">
          {(() => {
            const images = Array.from({ length: 7 });
            return images.map((_, index) => (
              <ImageCard key={index} />
            ));
          })()}
        </div>
      </main>
    </div>
  );
}
