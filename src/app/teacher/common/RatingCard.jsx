import React from 'react'
import '../../teacher/styles/rating-card.scss'
import { ICONS } from '../../utils/enums/Index'

const RatingCard = () => {
    return (
        <div className={RatingCard.styles.mainContainer}>
            <div>
            <div class="container">            
  <table class="table">
    <thead>
      <tr>
        <th>Names</th>
        <th>Fouls</th>
        <th>Score</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><img src={ICONS.AVATAR3}/>Chad Wade</td>
        <td>2</td>
        <td>66.2%</td>
        <td><img src={ICONS.BELL}/></td>
      </tr>
      <tr>
        <td><img src={ICONS.AVATAR4}/>Chad Wade</td>
        <td>0</td>
        <td>66.2%</td>
        <td><img src={ICONS.BELL}/></td>
      </tr>
      <tr>
        <td><img src={ICONS.AVATAR1}/>Chad Wade</td>
        <td>0</td>
        <td>66.2%</td>
        <td><img src={ICONS.BELL}/></td>
      </tr>
      <tr>
        <td><img src={ICONS.AVATAR3}/>Chad Wade</td>
        <td>2</td>
        <td>66.2%</td>
        <td><img src={ICONS.BELL}/></td>
      </tr>
      <tr>
        <td><img src={ICONS.AVATAR4}/>Chad Wade</td>
        <td>0</td>
        <td>66.2%</td>
        <td><img src={ICONS.BELL}/></td>
      </tr>
      <tr>
        <td><img src={ICONS.AVATAR1}/>Chad Wade</td>
        <td>0</td>
        <td>66.2%</td>
        <td><img src={ICONS.BELL}/></td>
      </tr>
      <tr>
          <td>COURSE AVERAGE</td>
          <td></td>
          <td>69.5%</td>
      </tr>
    </tbody>
  </table>
</div>

            </div>
        </div>
    )
}
RatingCard.styles = {
    mainContainer: "nos-online__ratingcard-container-root-rating",
}
export default RatingCard
