

const CategoryItem = ({item}) => {
  return (
    <div className="h-[72vh] w-[31%] rounded relative">
        <img src={item.image} alt="" className="object-cover h-full w-full" />
        <div className="absolute top-44 left-28 flex items-center flex-col gap-4">
            <h1 className="text-4xl font-semibold text-white">{item.title}</h1>
            <button className="px-2 py-2 bg-white text-gray-400 ">{item.button}</button>
        </div>
    </div>
  )
}

export default CategoryItem