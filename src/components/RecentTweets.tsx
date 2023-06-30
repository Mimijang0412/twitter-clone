import Image from "next/image";
import InfiniteTweetList from "../components/InfiniteTweetList"
import { api } from "~/utils/api";


type ProfileImageProps = {
  src?: string | null
  className ?: string
}
export default function RecentTweets() {
  const tweets = api.tweet.infiniteFeed.useInfiniteQuery({}, { getNextPageParam: (lastPage)=>lastPage.nextCursor});
  
  return (
    <InfiniteTweetList
     tweets={tweets.data?.pages.flatMap(page => page.tweets)}
     isError={tweets.isError}
     isLoading={tweets.isLoading}
     hasMore={tweets.hasNextPage}
     fetchNewTweets={tweets.fetchNextPage}
      />
  )
}