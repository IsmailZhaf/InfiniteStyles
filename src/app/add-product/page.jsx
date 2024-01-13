import prisma from "@/lib/db/prisma";
import { redirect } from "next/dist/server/api-utils";

export const metadata = {
  title: "Add Product - InfiniteStyle"
}

async function addProduct(formData){
  "use server";

  const name = formData.get("name")?.toString();
  const description = formData.get("description")?.toString();
  const image = formData.get("image")?.toString();
  const price = Number(formData.get("price") || 0);
  
  
  if (!name || !description || !image || !price) {
    throw new Error("Missing required fields");
  }

  await prisma.product.create({
    data:{name, description, image, price}
  });

  redirect("/");
}

export default function AddProductPage() {
  return (
    <div>
        <h1 className="mb-3 text-lg font-bold">Add Product</h1>
        <form action={addProduct}>
          <input
          required
          name="name"
          placeholder="Name"
          className="mb-3 w-full input input-bordered"
          />
          <textarea
          required
          name="description"
          placeholder="Description"
          className="textarea-bordered textarea mb-3 w-full"
          />
           <input
          required
          name="image"
          placeholder="Image"
          type="file"
          className="mb-3 w-full input input-bordered"
          />
           <input
          required
          name="price"
          placeholder="Price"
          type="number"
          className="mb-3 w-full input input-bordered"
          />
          <button className="btn btn-primary btn-block" type="submit">Add Product</button>
        </form>
        
    </div>
  )
}
