import React from 'react'
import '../../teacher/styles/rating-card.scss'
import { ICONS } from '../../utils/enums/Index'

const RatingCard1 = () => {
    return (
        <div className={RatingCard1.styles.mainContainer}>
            <div>
            <div class="container">            
  <table class="table">
    <thead>
      <tr>
        <th>Names</th>
        <th>Deadline</th>
        <th>Status</th>
        <th>Score</th>
        <th>of</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Practice No. 1 Modern Art</td>
        <td>12-02-2020 10:26 PM</td>
        <td></td>
        <td>80</td>
        <td>100</td>
        <td></td>
      </tr>
      <tr>
      <td>Practice No. 1 Modern Art</td>
        <td>12-02-2020 10:26 PM</td>
        <td></td>
        <td>80</td>
        <td>100</td>
        <td><img src={ICONS.MESSAGE}/></td>
      </tr>
      <tr>
      <td>Practice No. 1 Modern Art</td>
        <td>12-02-2020 10:26 PM</td>
        <td>Faltante</td>
        <td>80</td>
        <td>100</td>
        <td></td>
      </tr>
      <tr>
      <td>Practice No. 1 Modern Art</td>
        <td>12-02-2020 10:26 PM</td>
        <td></td>
        <td>80</td>
        <td>100</td>
        <td><img src={ICONS.MESSAGE}/></td>
      </tr>
      <tr>
          <td>Practices</td>
          <td></td>
          <td></td>
          <td>69.5%</td>
      </tr>
      <tr>
          <td>Exams</td>
          <td></td>
          <td></td>
          <td>69.5%</td>
      </tr>
      <tr>
          <td>TOTAL</td>
          <td></td>
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
RatingCard1.styles = {
    mainContainer: "nos-online__ratingcard-container-root-rating",
}
export default RatingCard1
