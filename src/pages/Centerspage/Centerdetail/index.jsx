// Vytvořte komponentu CenterDetail pro zobrazení detailu pobočky. Tato komponenta bude sídlit pod cestou /pobocky/:id. Pomocí useParams a funkce getCenterById získejte položku podle parametru :id. Zobrazte detail pobočky s otvíracími hodinami i popisem.
import React from 'react';
import { useParams } from 'react-router-dom';
import { getCenterById } from '../../../centers';

export const CenterDetail = () => {
  const { id } = useParams();
  const centers = getCenterById(id);
  return (
    <div className="center-detail">
      <h1>{centers.name}</h1>
      <p>{centers.info}</p>
      <p>Adresa pobočky je: {centers.address}</p>
      <p>Kapacita dětí: {centers.capacity}</p>
      <h2>Otevírací doba</h2>
      <p>Pondělí: {centers.open.mon}</p>
      <p>Úterý: {centers.open.tue}</p>
      <p>Středa: {centers.open.wed}</p>
      <p>Čtvrtek: {centers.open.thu}</p>
      <p>Pátek: {centers.open.fri}</p>
      <p>Sobota: {centers.open.sat === null ? 'Zavřeno' : centers.open.sat}</p>
      <p>Neděle: {centers.open.sun === null ? 'Zavřeno' : centers.open.sun}</p>
    </div>
  );
};
