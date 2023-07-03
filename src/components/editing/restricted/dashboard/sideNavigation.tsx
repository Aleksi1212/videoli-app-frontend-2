import { component$, useSignal } from '@builder.io/qwik';

import { Image } from '@unpic/qwik';
import expand from '~/icons/expand.webp';
import search from '~/icons/search.webp';

export const SideNavBar = component$((props: { userId: string }) => {
    const showFavorites = useSignal<boolean>(false);

    return (
        <div class="w-[15%] h-full fixed left-0 text-textColor border-r-2 border-accentColor2">
            <div class="w-full p-2 flex flex-col border-b-2 gap-2 border-accentColor2">
                <button class="p-1.5 flex justify-between items-center rounded-md hover:bg-secondary_button">
                    <div class="flex items-center gap-2">
                        <div class="w-[1.5rem] h-[1.5rem] bg-[white] rounded-full"></div>
                        <p>
                            {props.userId.length > 15
                                ? `${props.userId.substring(0, 15)}...`
                                : props.userId}
                        </p>
                    </div>
                    <Image
                        src={expand}
                        alt="expand"
                        width={24}
                        height={24}
                        loading="lazy"
                    />
                </button>

                <div class="relative flex items-center">
                    <Image
                        src={search}
                        alt="search"
                        width={18}
                        height={18}
                        loading="lazy"
                        class="absolute left-2"
                    />
                    <input
                        type="text"
                        placeholder="Search videoli files"
                        class="bg-secondary_button p-2 outline-none rounded-md text-sm w-full pl-8"
                    />
                </div>
            </div>

            <div class="flex flex-col p-2">
                <button
                    class="text-sm flex items-center w-fit"
                    onClick$={() => {
                        showFavorites.value = !showFavorites.value;
                    }}
                >
                    <Image
                        src={expand}
                        alt="expand"
                        width={20}
                        height={20}
                        loading="lazy"
                        style={{
                            transform: showFavorites.value
                                ? 'rotate(-90deg)'
                                : '',
                        }}
                    />
                    <span>Favorite videoli files</span>
                </button>
            </div>
        </div>
    );
});
