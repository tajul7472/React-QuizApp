import { useEffect, useState } from 'react'
import { get, getDatebase, orderByKey, query, ref } from "firebase/database"

const UseVideoList = () => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [videos, setVideo] = useState()

    useEffect(() => {
        async function fetchVidoes() {
            const db = getDatebase();
            const videosRef = ref(db, "vidoes")
            const videoQuery = query(
                videosRef,
                orderByKey()
            )
            try {
                setError(false)
                setLoading(true)
                //Request firbasedata
                const snapshot = await get(videoQuery)
                setLoading(false)
                if (snapshot.exists()) {
                    setVideo((prevideos) => {
                        return [...prevideos, ...Object.values(snapshot.val())]

                    })

                } else {

                }

            } catch (err) {
                console.log(err)
                setLoading(false)
                setError(true)

            }


        }
        fetchVidoes()
    }, [])
    return (
        loading,
        error,
        videos

    )


}

export default UseVideoList