import NoContentWarning from '../components/home/NoContentWarning'

import { useContext } from 'react'
import { TrainingsContext } from '../TrainingsContext'
import TrainingsCards from '../components/home/TrainingsCards'

export default function Home() {

    const { trainings } = useContext(TrainingsContext)

    const lastIndex = trainings.length - 1

    return (
        <div>
            {
                trainings[lastIndex].trainingName ?
                    <TrainingsCards />
                    : <NoContentWarning />
            }
        </div>
    )

}