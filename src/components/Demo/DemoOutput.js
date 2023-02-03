import React, { useMemo } from "react";

const DemoOutput = ({ items, show }) => {
  // ukoliko imam neku funkciju koja se ne pokrece samo jednom ili
  // ne preterano cesto
  // a u istoj komponenti imam drugi state koji ce se stalno menjati i
  // uzrokovati rerender cele komponente
  // onda je zgodno koristiti useMemo() da bi sprecili odredjeni deo koda
  // da se ponavlja bez potrebe
  // posebno ako je neka funkcija koja iziskuje malo vise logike

  const sortedList = useMemo(() => {
    items.sort((a, b) => a - b);
  }, [items]);

  return (
    <>
      <p>{show ? "This is new" : ""}</p>
      {sortedList.map((item) => {
        return <p key={item + 1}>{item}</p>;
      })}
    </>
  );
};

// ova funkcija kaze reactu da prati premene propsa koje dobija
// ova komponenta i da rerenderuje komponentu samo u slucaju
// da se props menja, dobro je za optimizaciju aplikacije
// ne bi trebalo da se koristi na svakoj komponenti
// preoporuka je da se koristi na komponenti koja ima vise
// child komponenti i na taj nacin sprecava nepotreban rerender i tih
// ostalih komponenti
// naravno ukoliko komponenta svakako treba da vraca neki rezultat
// i potreban joj je render onda nema svrhe primenjivati ovu funkciju
export default React.memo(DemoOutput);
