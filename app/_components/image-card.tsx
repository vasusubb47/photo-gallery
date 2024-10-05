import Image from "next/image";

export default function ImageCard() {
    return (
        <div className="rounded-md border-solid border-2 border-sky-500">
            <Image
                width={200}
                height={300}
                src="https://picsum.photos/200/300"
                alt="Image"
            />
            <div className="p-4">
                <h2 className="text-xl font-bold">Image Title</h2>
                <p>Description of the image</p>
            </div>
        </div>
    );
}
