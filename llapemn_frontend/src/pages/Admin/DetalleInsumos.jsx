import React from "react";
import { useEffect, useState } from "react";
import { useHistorial, useInsumos } from "../../hooks";
import { useParams } from "react-router-dom";
import {
  TableHistoriall,
  Button,
  AddHistorial,
  InfHistorial,
} from "../../components/Admin";
import { ModalBasic } from "../../components/Common";

export function DetalleInsumos() {
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [titleModal, setTitleModal] = useState(null);
  const [contentModal, setContentModal] = useState(null);
  const [refetch, setRefetch] = useState(false);
  const openCloseModal = () => setShowModal((prev) => !prev);
  const onRefetch = () => setRefetch((prev) => !prev);
  const { getHistorialByInsumo, historial, loading } = useHistorial();
  const { getInsumosById, insumos } = useInsumos();
  useEffect(() => {
    getHistorialByInsumo(id);
  }, [refetch]);
  useEffect(() => {
    getInsumosById(id);
  }, []);

  const addHistorial = (data) => {
    setTitleModal("Sumar");
    setContentModal(
      <AddHistorial
        onClose={openCloseModal}
        onRefetch={onRefetch}
        history={insumos}
        operacion={"S"}
      />,
    );
    openCloseModal();
  };
  const RestarHistorial = (data) => {
    setTitleModal("Restar");
    setContentModal(
      <AddHistorial
        onClose={openCloseModal}
        onRefetch={onRefetch}
        history={insumos}
        operacion={"R"}
      />,
    );
    openCloseModal();
  };
  const MoverHistorial = (data) => {
    setTitleModal("Mover");
    setContentModal(
      <AddHistorial
        onClose={openCloseModal}
        onRefetch={onRefetch}
        history={insumos}
        operacion={"C"}
      />,
    );
    openCloseModal();
  };

  return (
    <>
      <InfHistorial historial={historial} />
      <div className="flex w-full flex-col">
        <Button btnTitle={"Agregar Insumo"} btnClick={addHistorial} />
        <Button btnTitle={"Utilizar Insumo"} btnClick={RestarHistorial} />
        <Button btnTitle={"Mover Insumo"} btnClick={MoverHistorial} />
      </div>
      <TableHistoriall historial={historial} />
      <ModalBasic
        isVisible={showModal}
        onClose={openCloseModal}
        title={titleModal}
        children={contentModal}
      />
    </>
  );
}
