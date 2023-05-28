import useSwr from 'swr';
import fetcher from '../lib/fetcher';
const useAlbumlist = () => {
    const { data, error } = useSwr('/api/albumlist', fetcher);
    return {
        data: data,
        isLoading: !error && !data,
        isError: error,
    };
}