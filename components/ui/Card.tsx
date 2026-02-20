export default function Card({
  title,
  value
}: {
  title: string
  value: string | number
}) {
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm border">
      <p className="text-sm text-gray-500">{title}</p>
      <h2 className="text-2xl font-bold text-indigo-600 mt-2">
        {value}
      </h2>
    </div>
  )
}
