import { MOVIE } from "@/models";
import { Card, CardContent } from "../ui/card";

interface MOVIEPROP{
    movie : MOVIE
}

const MovieCard = ({movie} : MOVIEPROP ) => {
    return ( 
        <Card>
              <figure>
                <img 
                className="w-full h-64 object-cover" 
                 src={movie.Poster} 
                alt="" />
              </figure>
              <CardContent>
                <h1 className="text-center">
                {movie.Title}
                </h1>

               
              </CardContent>
              
            </Card>
     );
}
 
export default MovieCard;