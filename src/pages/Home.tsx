import NoContentWarning from '../components/home/NoContentWarning'

import { useContext } from 'react'
import { TrainingsContext } from '../TrainingsContext'
import TrainingsCards from '../components/home/TrainingsCards'

export default function Home() {

    const { trainings } = useContext(TrainingsContext)

    return (
        <div>
            {
                trainings.length > 0 && trainings[0].trainingName ?
                    <TrainingsCards />
                    : <NoContentWarning />
            }
        </div>
    )

}