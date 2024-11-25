"use client";

import { formatPrice } from "@/utils/formatPrice";
import { truncateText } from "@/utils/truncateText";
import { Rating } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ProductCardProps {
  data: any;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const router = useRouter();

  const productRating =
    data.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) /
    data.reviews.length;

  console.log(productRating);

  return (
    <div
      onClick={() => router.push(`/product/${data.id}`)}
      className="col-span-1
    cursor-pointer
    border-slate-200
    bg-gray-50
    rounded-md
    pb-2
    transition
    hover:scale-105
    hover:bg-gray-200
    text-center
    text-sm
    shadow-md
    "
    >
      <div
        className="
      flex
      flex-col
      items-center
      w-full
      gap-1
      "
      >
        <div className="aspect-square overflow-hidden relative w-full rounded-md">
        {data.images?.[0]?.image && (
          <Image
            fill
            src={data.images[0].image || "/placeholder.jpg"}
            alt={data.name}
            className="w-full h-full object-cover"
          />
        )}
        </div>
        <div className="mt-4 text-blue-300">{truncateText(data.name)}</div>
        <div>
          <Rating value={productRating} readOnly />
        </div>
        <div>{data.reviews.length} reviews</div>
        <div className="font-semibold">{formatPrice(data.price)}</div>
      </div>
    </div>
  );
};

export default ProductCard;
