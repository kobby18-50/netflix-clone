import { MOVIE } from "@/models";
import { Card, CardContent } from "../ui/card";

interface MOVIEPROP{
    movie : MOVIE
}

const MovieCard = ({movie} : MOVIEPROP ) => {
    return ( 
      <Card className="relative group">
  <figure className="relative h-64 overflow-hidden">
    {/* Movie Poster */}
    <img
      className="object-cover w-full h-full"
      src={movie.Poster}
      alt={movie.Title}
    />
    {/* Overlay */}
    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-start justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <p className="text-white font-bold text-sm bg-black bg-opacity-75 px-2 py-1 rounded m-2">
        {movie.Year}
      </p>
    </div>
  </figure>
  <CardContent className="text-center">
    <h3 className="font-medium">{movie.Title}</h3>
  </CardContent>
</Card>

//       <Card className="relative group">
//   <figure className="relative">
//     {/* Movie Poster */}
//     <img
//       className="object-cover w-full h-full"
//       src={movie.Poster}
//       alt={movie.Title}
//     />
//     {/* Year in Top-Right Corner */}
   
//     {/* Overlay */}
//     <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//     <div className="absolute top-2 right-2 bg-black bg-opacity-75 text-white font-bold text-sm px-2 py-1 rounded">
//       {movie.Year}
//     </div>
//       {/* <p className="text-white font-bold text-lg">{movie.Title}</p> */}
//     </div>
//   </figure>
//   <CardContent className="text-center">
//     <h3 className="font-medium">{movie.Title}</h3>
//   </CardContent>
// </Card>

  
    // <Card  className="relative group">
    //   <figure className="relative">
    //     {/* Movie Poster */}
    //     <img
    //       className="object-cover w-full h-full"
    //       src={movie.Poster}
    //       alt={movie.Title}
    //     />
    //     {/* Overlay */}
    //     <div className="absolute inset-0 bg-black bg-opacity-50 flex float-right opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    //       <p className="text-white font-bold text-lg ">
    //         {movie.Year}
    //       </p>
    //     </div>
    //   </figure>
    //   <CardContent className="text-center">
    //     <h3 className="font-medium">{movie.Title}</h3>
    //   </CardContent>
    // </Card>

        // <Card>
        //       <figure>
        //         <img 
        //         className="w-full h-64 object-cover" 
        //          src={movie.Poster} 
        //         alt="" />
        //       </figure>
        //       <CardContent>
        //         <h1 className="text-center">
        //         {movie.Title}
        //         </h1>

               
        //       </CardContent>
              
        //     </Card>
     );
}
 
export default MovieCard;