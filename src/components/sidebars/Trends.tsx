
//dummy data
const trends =
    [
        {
            category: "Sports",
            content: "some team won something!",
            glideCount: 300
        },
        {
            category: "Finance",
            content: "Stop using Bitcoin!",
            glideCount: 200
        },
        {
            category: "PC & Games",
            content: "New game released!",
            glideCount: 800
        },
        {
            category: "Economy",
            content: "Sad story, bro",
            glideCount: 200
        },
        {
            category: "Celebrities",
            content: "Who cares?",
            glideCount: 700
        },
        {
            category: "Programming",
            content: "Peter Jackson is not a programmer...probably",
            glideCount: 1200
        },
    ];

const TrendsSidebar = () =>
{
    return (
        <div class="bg-gray-800 overflow-hidden flex-it rounded-2xl">
            <div class="flex-it p-4">
                <span class="text-xl font-bold">Trends</span>
            </div>
            <div class="flex-it p-4 cursor-pointer transition duration-200 hover:bg-gray-700">
                <div class="flex-it">
                    <span class="text-gray-400 text-sm">
                        Trends in Europe
                    </span>
                    <span class="text-lg font-bold">Sports</span>
                    <span class="text-gray-400 text-sm">10 000 glides</span>
                </div>
            </div>
            <div class="flex-it p-4 cursor-pointer transition duration-200 hover:bg-gray-700">
                <div class="flex-it">
                    <span class="text-gray-400 text-sm">
                        Trends in Europe
                    </span>
                    <span class="text-lg font-bold">Sports</span>
                    <span class="text-gray-400 text-sm">10 000 glides</span>
                </div>
            </div>
            <div class="flex-it p-4 cursor-pointer transition duration-200 hover:bg-gray-700">
                <div class="flex-it">
                    <span class="text-gray-400 text-sm">
                        Trends in Europe
                    </span>
                    <span class="text-lg font-bold">Sports</span>
                    <span class="text-gray-400 text-sm">10 000 glides</span>
                </div>
            </div>
            <div class="flex-it p-4 cursor-pointer transition duration-200 hover:bg-gray-700">
                <div class="flex-it">
                    <span class="text-gray-400 text-sm">
                        Trends in Europe
                    </span>
                    <span class="text-lg font-bold">Sports</span>
                    <span class="text-gray-400 text-sm">10 000 glides</span>
                </div>
            </div>
            <div class="flex-it p-4 cursor-pointer transition duration-200 hover:bg-gray-700">
                <div class="flex-it">
                    <span class="text-gray-400 text-sm">
                        Trends in Europe
                    </span>
                    <span class="text-lg font-bold">Sports</span>
                    <span class="text-gray-400 text-sm">10 000 glides</span>
                </div>
            </div>
            <div class="flex-it p-4 cursor-pointer transition duration-200 hover:bg-gray-700">
                <div class="flex-it">
                    <span class="text-gray-400 text-sm">
                        Trends in Europe
                    </span>
                    <span class="text-lg font-bold">Sports</span>
                    <span class="text-gray-400 text-sm">10 000 glides</span>
                </div>
            </div>
            { JSON.stringify( trends ) }
        </div>
    );
};

export default TrendsSidebar;