//solid
import { For } from "solid-js";

//dummy data
const randomize = () => Math.floor( Math.random() * 1000 );
const trends =
    [
        {
            category: "Sports",
            content: "some team won something!",
            glideCount: randomize()
        },
        {
            category: "Finance",
            content: "Stop using Bitcoin!",
            glideCount: randomize()
        },
        {
            category: "PC & Games",
            content: "New game released!",
            glideCount: randomize()
        },
        {
            category: "Economy",
            content: "Sad story, bro",
            glideCount: randomize()
        },
        {
            category: "Celebrities",
            content: "Who cares?",
            glideCount: randomize()
        },
        {
            category: "Programming",
            content: "Peter Jackson is not a programmer...probably",
            glideCount: randomize()
        },
    ];

const TrendsSidebar = () =>
{
    return (
        <div class="bg-gray-800 overflow-hidden flex-it rounded-2xl">
            <div class="flex-it p-4">
                <span class="text-xl font-bold">Trends</span>
            </div>

            <For each={ trends }>
                { ( trend ) =>
                    <div class="flex-it p-4 cursor-pointer transition duration-200 hover:bg-gray-700">
                        <div class="flex-it">
                            <span class="text-gray-400 text-sm">
                                { trend.content }
                            </span>
                            <span class="text-lg font-bold">{ trend.category }</span>
                            <span class="text-gray-400 text-sm">{ trend.glideCount }</span>
                        </div>
                    </div>
                }
            </For>
        </div>
    );
};

export default TrendsSidebar;