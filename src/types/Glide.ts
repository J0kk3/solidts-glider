//types
import { User } from "./User";

export interface Glide
{
    /**
     * The Glide class is the base class for all Glide classes. It provides methods that are common to all Glide classes.
     */
    id: string;
    content: string;
    user: User;
    likesCount: number;
    subglidesCount: number;
    date: Date;
}