import { CircularProgressBar } from '@/components/icons'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

interface Props {
  title: string
  mediaType: 'movie' | 'tv'
  posterPath: string
  releaseDate: string
  voteAverage: number
}

function MovieCard({ mediaType, posterPath, releaseDate, title, voteAverage }: Props) {
  const percent = Math.round(voteAverage * 10)
  const strokeColor = percent >= 70 ? 'green' : percent >= 50 ? 'orange' : 'red'

  return (
    <Card className="flex flex-col">
      <CardHeader className="relative p-0 pt-[150%]">
        <img src={posterPath} alt={title} className="absolute left-0 top-0 size-full rounded-t-xl object-cover" />
        {mediaType === 'tv' ? (
          <div className="absolute right-1 top-1 rounded bg-background p-1 text-sm text-foreground shadow-md">
            TV Show
          </div>
        ) : null}
        <CircularProgressBar
          percent={percent}
          strokeColor={strokeColor}
          className="absolute bottom-0 left-2 translate-y-1/2"
        />
      </CardHeader>
      <CardContent className="flex grow flex-col pt-6">
        <CardTitle className="line-clamp-2 leading-normal">{title}</CardTitle>
        <CardDescription className="mt-auto text-white">{releaseDate}</CardDescription>
      </CardContent>
    </Card>
  )
}

function MovieCardSkeleton() {
  return (
    <div className="flex flex-col">
      <div className="relative p-0 pt-[150%]">
        <Skeleton className="absolute left-0 top-0 size-full rounded-t-xl" />
      </div>
      <div className="relative flex grow flex-col">
        <Skeleton className="w-3/4" />

        <div className="mt-auto text-white">
          <Skeleton className="w-1/2" />
        </div>
      </div>
    </div>
  )
}

export { MovieCard, MovieCardSkeleton }
