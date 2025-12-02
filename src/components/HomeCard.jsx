function HomeCard({id,title,text,bg,image}) {
  return (
    <>
    <div className="flex flex-col justify-around items-center">
        <div className="border border-amber-50 rounded-full p-6" style={{ backgroundColor: bg }}>
            <img src={image} alt={title} className="w-5 h-5"/>
        </div>
        <h2 className="mt-4">{title}</h2>
        <p className="text-gray-500 text-xs mt-2">{text}</p>
    </div>

      

    </>
  )
}

export default HomeCard
