import { Route, Switch } from 'react-router-dom'
import HolePage from '../HolePage'

export default function Holes({
  players,
  countScore,
  visible,
  onNext,
  onPrev,
  disabled,
  hole,
}) {
  return (
    <div>
      <Switch>
        <Route path="/one">
          <HolePage
            hole={hole}
            src="./../images/Hole-1.svg"
            alt="Hole One"
            par="Par 4"
            distMen="351"
            distWomen="331"
            players={players}
            onScore={countScore}
            resetScore={onNext}
            onPrev={onPrev}
            prev="/"
            next="/two"
            disabled={disabled}
          />
        </Route>
        <Route path="/two">
          <HolePage
            hole={hole}
            src="./../images/Hole-2.svg"
            par="Par 3"
            distMen="351"
            distWomen="331"
            players={players}
            onScore={countScore}
            resetScore={onNext}
            onPrev={onPrev}
            disabled={disabled}
            prev="/one"
            next="/eighteen"
          />
        </Route>
        <Route path="/eighteen">
          <HolePage
            hole={hole}
            src="./../images/Hole-18.svg"
            par="Par 5"
            distMen="351"
            distWomen="331"
            players={players}
            visible={visible}
            onScore={countScore}
            onPrev={onPrev}
            disabled={disabled}
            prev="/two"
            next="/winner"
          />
        </Route>
      </Switch>
    </div>
  )
}
