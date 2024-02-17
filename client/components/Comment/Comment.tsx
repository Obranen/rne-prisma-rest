import { useQuery } from '@tanstack/react-query'
import { FlatList, View } from 'react-native'
import { Text } from 'react-native-paper'
import { commentsGet } from '../../fetch/comment'
import CommentCreate from './CommentCreate/CommentCreate'
import CommentItem from './CommentItem/CommentItem'

export default function Comment() {
  const comments = useQuery({
    queryKey: ['comment'],
    queryFn: () => commentsGet(),
  })

  if (comments.isLoading) {
    return (
      <View className='flex-1'>
        <Text>Loading...</Text>
      </View>
    )
  }

  if (comments.error) {
    return (
      <View className='flex-1'>
        <Text>Error... Пользователи не загружены</Text>
      </View>
    )
  }

  return (
    <View className='flex-1 dark:bg-gray-800'>
      <CommentCreate />
      {comments.data?.length === 0 ? <Text className='font-bold text-center text-red-500'>Список пуст!</Text> : <></>}
      <FlatList
        data={comments.data}
        renderItem={({ item }) => <CommentItem comment={item} />}
      />
    </View>
  )
}