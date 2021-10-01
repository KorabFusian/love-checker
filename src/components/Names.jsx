const Names = () => {
  return (
    <div className="relative py-3 sm:max-w-xl sm:mx-auto">
      <div className="absolute inset-3 bg-gradient-to-r from-pink-400 to-red-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl" />
      <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
        <form>
          <input type="text" />
          <input type="text" />
          <button type="submit" />
        </form>
      </div>
    </div>
  )
}

export default Names
