
//import RestrauntCard from "../components/RestrauntMenu";
const Shimmer = () => {
    return (
        <>
            {/* <div className="resturant-list flex flex-wrap shadow-lg  max-w-screen-2xl justify-center">
                {Array(15)
                    .fill("").map((e, index) => (
                        <div key={index}
                            className="w-64 h-72 m-3 p-4 shadow-lg shadow-zinc-500 flex-wrap ">
                            <div className="w-56 basis- h-36 shadow-lg justify-center   animate-pulse	 rounded-md  bg-gray-300   "> </div>
                            <div className="w-44 h- mt-4 shadow-md shadow-black  bg-stone-300 p-3  animate-pulse	 justify-start rounded-md"></div>
                            <div className="w-48 h-3 mt-4 shadow-black  shadow-md  bg-stone-300 p-2 animate-pulse	  justify-start rounded-md"></div>
                            <div className="w-full h-3 mt-4 shadow-black  shadow-md  bg-stone-300 p-2  animate-pulse	 justify-start rounded-md"></div>

                        </div>

                    ))}


            </div> */}
              <div className="resturant-list flex flex-wrap shadow-lg max-w-screen-2xl justify-center bg-gray-50 p-6 rounded-lg">
      {Array(15).fill("").map((e, index) => (
        <div
          key={index}
          className="w-64 h-80 m-4 p-4 shadow-xl rounded-lg bg-white transform transition-transform hover:scale-105"
        >
          <div className="w-full h-40 mb-4 rounded-md bg-gray-200 animate-pulse"></div>
          <div className="w-3/4 h-5 mb-2 bg-gray-300 animate-pulse rounded-md"></div>
          <div className="w-1/2 h-4 mb-2 bg-gray-300 animate-pulse rounded-md"></div>
          <div className="w-full h-4 bg-gray-300 animate-pulse rounded-md"></div>
        </div>
      ))}
    </div>
        </>
    );
}
export default Shimmer;
//shadow-stone-500