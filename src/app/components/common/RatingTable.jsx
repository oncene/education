import React from 'react'
import "../../styles/rating-table.scss"

const RatingTable=()=> {
    return (
        <div className={RatingTable.styles.mainContainer}>
            <div className={RatingTable.styles.tableHeader}>
                <p>Nombre</p>
                <p>Fecha de entrega</p>
                <p>Estado</p>
                <p>Puntaje</p>
                <p>De</p>
            </div>
            <hr></hr>
            <div className={RatingTable.styles.tableData}>
                <p>Práctica Nro 1 Arte Moderno</p>
                <p>12-02-2020 10:26 PM</p>
                <p>70</p>
                <p>100</p>
            </div>
            <hr></hr>
            <div className={RatingTable.styles.tableData}>
                <p>Práctica Nro 1 Arte Moderno</p>
                <p>12-02-2020 10:26 PM</p>
                <p>70</p>
                <p>100</p>
            </div>
            <hr></hr>
            <div className={RatingTable.styles.tableData}>
                <p>Práctica Nro 1 Arte Moderno</p>
                <p>12-02-2020 10:26 PM</p>
                <p>70</p>
                <p>100</p>
            </div>
            <div className={RatingTable.styles.tableTotal}>
                <p>Prácticas</p>
                <p>56.25</p>
            </div>
            <div className={RatingTable.styles.tableTotal}>
                <p>Examenes</p>
                <p>65</p>
            </div>
            <div className={RatingTable.styles.tableTotal}>
                <p>TOTAL</p>
                <p>60.625 %</p>
            </div>
            
        </div>
    )
}
RatingTable.styles = {
    mainContainer: "nos-online__rating-table-container-rating-container",
    tableHeader: "nos-online__rating-table-container-table-header",
    tableData: "nos-online__rating-table-container-table-data",
    tableTotal: "nos-online__rating-table-container-table-total",
}
export default RatingTable
