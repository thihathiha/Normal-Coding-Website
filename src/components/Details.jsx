

function SkillSection({ id, title, items,image,bg}) {
  return (
    <div className="bg-[#0F172A] p-6 rounded-xl w-full shadow-lg">
      <div className="flex items-center gap-3 mb-4">
       <div className={`w-8 h-8 flex items-center justify-center text-white font-bold rounded-full ${bg}`}>
        {id}
        </div>
        <h2 className="text-lg font-semibold text-white">{title}</h2>
      </div>

      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2 text-gray-300 pl-6">
            <img src={image} alt="Check" className="w-5"/>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SkillSection;