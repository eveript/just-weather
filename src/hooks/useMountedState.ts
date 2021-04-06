import { useCallback, useEffect, useRef } from 'react'

// 항상 마운트 된걸로 나와서.
// 아직 어케 사용해야할지 감이 안잡힘.
export default function useMountedState() {
    const mountedRef = useRef(false)
    const get = useCallback(() => mountedRef.current, [])

    useEffect(() => {
        mountedRef.current = true

        return () => {
            mountedRef.current = false
        }
    }, [])

    return get
}
